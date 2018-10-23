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

      const classVariables = Object.keys(classJson);
      classVariables.forEach(classVar => {
        let classNameArray = classJson[classVar];
        
        if (!Array.isArray(classNameArray)) {
          classNameArray = [classNameArray];
        }

        defineClassBinding(elem, classVar, classNameArray, boundValues, classInstance);
      });
    }
  });
}

function defineClassBinding(
  elem: HTMLElement,
  propName: any,
  classNameArray: string[],
  boundValues: IBoundValues,
  classInstance: any
) {
  defineGetterSetter(boundValues, propName, classInstance);
  
  const classSetter = (newValue: boolean) => {
    boundValues[propName] = newValue;
    
    setClassElem(elem, newValue, classNameArray);
    return newValue;
  };
  cachedSetters[propName].push(classSetter);

  setClassElem(elem, boundValues[propName], classNameArray);
}

function setClassElem(elem: HTMLElement, newValue: boolean, classNameArray: string[]) {
  // Have to do it for each item individually, because IE11.
  classNameArray.forEach(className => {
    if (newValue) {
      return elem.classList.add(className);
    }
    return elem.classList.remove(className);
  });
}
