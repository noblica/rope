import {
  getElemArray,
  setChangeListener,
  setElem,
  cachedSetters,
  defineGetterSetter
} from './utils';

import { IBoundValues } from './IBoundValues';

export function ropeDouble(boundValues: IBoundValues, classInstance: any) {
  const ropeDouble = getElemArray('[data-g-rope]');

  ropeDouble.forEach((elem: HTMLElement) => {
    // The value of each data-g-rope attribute represents the
    // variable name that it's bound to, in the class instance.
    // We use it as a key value, in the value cache(boundValues) object, as well.
    const propName = elem.dataset['gRope'];
    defineBinding(elem, propName, boundValues, classInstance);
  });
}

// The meat of the decorator.
// Here we define the setter for the corresponding attribute in our class,
// as well as the event listener for the corresponding input element.
function defineBinding(
  elem: HTMLElement,
  propName: any,
  boundValues: IBoundValues,
  classInstance: any
) {
  defineGetterSetter(boundValues, propName, classInstance);

  const newSetter = (newValue: any) => {
    boundValues[propName] = newValue;

    return setElem(elem, boundValues[propName]);
  };
  cachedSetters[propName].push(newSetter);

  // Set the event listener, that listens to the change event,
  // and updates our corresponding class property.
  setChangeListener(<HTMLInputElement>elem, propName, classInstance);

  // Set the initial value, that is in the class property, to our element.
  setElem(elem, boundValues[propName]);
}
