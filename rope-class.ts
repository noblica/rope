import {
    getElemArray,
    convertToJson,
    cachedSetters
  } from './utils';
  
export function ropeClass(boundValues, classInstance) {
  const ropeClass = getElemArray('[rope-class]');
  
  ropeClass.forEach(elem => {
    const classConditionObject = elem.getAttribute('rope-class');
    const classJson = convertToJson(classConditionObject);
    
    const classVar = Object.keys(classJson)[0];
    const className = classJson[classVar];

    defineClassBinding(elem, classVar, className, boundValues, classInstance);
  });
}
  
  
function defineClassBinding(elem, classVar, className, boundValues, classInstance) {

// Add the current value of the property, to our value cache.
boundValues[classVar] = boundValues[classVar] ? boundValues[classVar] : classInstance[classVar];

setClassElem(elem, boundValues[classVar], className);

const classSetter = (newValue) => {
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

function setClassElem(elem, newValue, className){
    if (newValue) {
    return elem.classList.add(className);
    }
    return elem.classList.remove(className);
}
  