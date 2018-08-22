import {
    getElemArray,
    convertToJson,
    cachedSetters
} from './utils';
  
import { IBoundValues } from './IBoundValues';

export function ropeClass(
    boundValues: IBoundValues,
    classInstance: any
) {
  const ropeClass = getElemArray('[rope-class]');
  
  ropeClass.forEach((elem: HTMLElement)  => {
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
    classVar: any,
    className: string,
    boundValues: IBoundValues,
    classInstance: any
) {

// Add the current value of the property, to our value cache.
boundValues[classVar] = boundValues[classVar] ?
    boundValues[classVar] :
    classInstance[classVar];

setClassElem(elem, boundValues[classVar], className);

const classSetter = (newValue: boolean) => {
    boundValues[classVar] = newValue;

    setClassElem(elem, newValue, className);
    return newValue;
}

if (!cachedSetters[classVar]) {
    cachedSetters[classVar] = [];
}
cachedSetters[classVar].push(classSetter);

Object.defineProperty(classInstance, classVar, {
    get: () => boundValues[classVar],
    set: (newValue) => {
        cachedSetters[classVar].forEach((setterFn: Function) => setterFn(newValue));
    }
});
}

function setClassElem(
    elem: HTMLElement,
    newValue: boolean,
    className: string
){
    if (newValue) {
        return elem.classList.add(className);
    }
    return elem.classList.remove(className);
}
  