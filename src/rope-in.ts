import { getElemArray, setChangeListener, cachedSetters } from './utils';

import { IBoundValues } from './IBoundValues';

export function ropeIn(boundValues: IBoundValues, classInstance: any) {
  const ropeInElems = getElemArray('[rope-in]');

  ropeInElems.forEach((elem: HTMLElement) => {
    const propName = elem.getAttribute('rope-in');
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
  // Add the current value of the property, to our value cache.
  boundValues[propName] = boundValues[propName]
    ? boundValues[propName]
    : classInstance[propName];

  const newSetter = (newValue: any) => {
    boundValues[propName] = newValue;

    return boundValues[propName];
  };

  if (!cachedSetters[propName]) {
    cachedSetters[propName] = [];
  }

  cachedSetters[propName].push(newSetter);

  Object.defineProperty(classInstance, propName, {
    get: () => boundValues[propName],
    set: newValue => {
      cachedSetters[propName].forEach(setterFn => setterFn(newValue));
    }
  });

  // Set the event listener, that listens to the change event,
  // and updates our corresponding class property.
  setChangeListener(<HTMLInputElement>elem, propName, classInstance);
}
