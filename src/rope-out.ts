import {
  getElemArray,
  setElem,
  cachedSetters
} from './utils';

import { IBoundValues } from './IBoundValues';
  
export function ropeOut(
  boundValues: IBoundValues,
  classInstance: any
) {
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

  // Add the current value of the property, to our value cache.
  boundValues[propName] = boundValues[propName] ?
    boundValues[propName] :
    classInstance[propName];

  const newSetter = (newValue: any) => {
    boundValues[propName] = newValue;

    return setElem(elem, boundValues[propName]);
  };

  if (!cachedSetters[propName]) {
    cachedSetters[propName] = [];
  }

  cachedSetters[propName].push(newSetter);

  // We define the getter and setter properties.
  // for the getter and setter, we use the cached values,
  // because we don't want to fall into an infinite loop 
  Object.defineProperty(classInstance, propName, {
    get: () => boundValues[propName],
    set: (newValue) => {
        cachedSetters[propName].forEach(setterFn => setterFn(newValue));
      },
  });

  // Set the initial value, that is in the class property, to our element.
  setElem(elem, boundValues[propName]);
}
