import {
  getElemArray,
  convertToJson,
  cachedSetters,
  defineGetterSetter
} from './utils';

import { IBoundValues } from './IBoundValues';

export function ropeClass(boundValues: IBoundValues, classInstance: any) {
  const ropeClass = getElemArray('[rope-class]');

  ropeClass.forEach((elem: HTMLElement) => {
    const classConditionObject = elem.getAttribute('rope-class');
    if (classConditionObject) {
      const classJson = convertToJson(classConditionObject);

      const classVar = Object.keys(classJson)[0];
      const className = classJson[classVar];

      defineClassBinding(elem, classVar, className, boundValues, classInstance);
    }
  });
}

function defineClassBinding(
  elem: HTMLElement,
  propName: any,
  className: string,
  boundValues: IBoundValues,
  classInstance: any
) {
  defineGetterSetter(boundValues, propName, classInstance);
  
  const classSetter = (newValue: boolean) => {
    boundValues[propName] = newValue;
    
    setClassElem(elem, newValue, className);
    return newValue;
  };
  cachedSetters[propName].push(classSetter);

  setClassElem(elem, boundValues[propName], className);
}

function setClassElem(elem: HTMLElement, newValue: boolean, className: string) {
  if (newValue) {
    return elem.classList.add(className);
  }
  return elem.classList.remove(className);
}
