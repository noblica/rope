import {
  getElemArray,
  setElem,
  cachedSetters,
  defineGetterSetter
} from './utils';

import { IBoundValues } from './IBoundValues';

export function ropeOut(boundValues: IBoundValues, classInstance: any) {
  const ropeOutElems = getElemArray('[rope-out]');

  ropeOutElems.forEach((elem: HTMLElement) => {
    const propName = elem.getAttribute('rope-out');
    defineBinding(elem, propName, boundValues, classInstance);
  });
}

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
  // Set the initial value, that is in the class property, to our element.
  setElem(elem, boundValues[propName]);
}
