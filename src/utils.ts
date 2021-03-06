import { IBoundValues } from './IBoundValues';

// Helper method, for getting all of the elements with the data-g-rope attribute on them, through a query selector.
// And converting that to an array, before returning it for easier handling.
export function getElemArray(selector: string) {
  const elementNodes = document.querySelectorAll(selector);
  const elementArray = [].slice.call(elementNodes);

  return elementArray;
}

// Add the event listener on the input element,
// that changes the data model, when the input updates
export function setChangeListener(
  elem: HTMLInputElement,
  propName: any,
  classInstance: any
) {
  // TODO IE11: 'change' -> on blur but necesarry for checkbox.
  // 'input' -> on keypress basically. but not working for checkbox in IE11.
  elem.addEventListener('input', function(event) {
    const currentElem = <HTMLInputElement>event.currentTarget;
    if (currentElem) {
      const elemType = currentElem.type;

      switch (elemType) {
        case 'checkbox':
          classInstance[propName] = elem.checked;
          return classInstance;

        default:
          classInstance[propName] = elem.value;
          return classInstance;
      }
    }
  });
}

// TODO: Check if you can improve this.
export function convertToJson(classConditionObject: string) {
  const jsontemp = classConditionObject.replace(/([\w]+)(:)/g, '"$1"$2');
  const correctjson = jsontemp.replace(/'/g, '"');
  return JSON.parse(correctjson);
}

// Helper method for setting the inital value, if already set in the model.
export function setElem(elem: HTMLElement, valueToSet: any) {
  if (elem.tagName !== 'INPUT' && elem.tagName !== 'SELECT') {
    elem.textContent = valueToSet;
  }

  const inputElement = <HTMLInputElement>elem;

  switch (inputElement.type) {
    case 'checkbox':
      inputElement.checked = valueToSet;
      return valueToSet;

    case 'radio':
      // TODO: Improve this by replacing document with the context
      const radioToSelect = <HTMLInputElement>(
        document.querySelector(`[value=${valueToSet}]`)
      );
      radioToSelect.checked = true;
      return valueToSet;

    default:
      inputElement.value = valueToSet;
      return valueToSet;
  }
}

export const cachedSetters: {
  [key: string]: Function[];
} = {};

export function defineGetterSetter(
  boundValues: IBoundValues,
  propName: any,
  classInstance: any
) {
  // Add the current value of the property, to our value cache.
  boundValues[propName] = boundValues[propName]
    ? boundValues[propName]
    : classInstance[propName];

  // We define the getter and setter properties.
  // for the getter and setter, we use the cached values,
  // because we don't want to fall into an infinite loop
  Object.defineProperty(classInstance, propName, {
    get: () => boundValues[propName],
    set: newValue => {
      cachedSetters[propName].forEach(setterFn => setterFn(newValue));
    }
  });

  if (!cachedSetters[propName]) {
    cachedSetters[propName] = [];
  }}
