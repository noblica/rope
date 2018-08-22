// Helper method, for getting all of the elements with the data-g-rope attribute on them, through a query selector.
// And converting that to an array, before returning it for easier handling.
export function getElemArray(selector) {
    const elementNodes = document.querySelectorAll(selector);
    const elementArray = [].slice.call(elementNodes);
    
    return elementArray;
  }
  
  // Add the event listener on the input element,
  // that changes the data model, when the input updates
  export function setChangeListener(elem, propName, classInstance) {
  
    elem.addEventListener('input', function(event) {
      const currentElem = event.currentTarget;
      const elemType = currentElem.type;
      
      switch(elemType) {
        case 'checkbox':
          classInstance[propName] = elem.checked;
          return classInstance;
  
        default: 
          classInstance[propName] = elem.value;
          return classInstance;
      }
    });
  }
  
  // TODO: Check if you can improve this.
  export function convertToJson(classConditionObject) {
    const jsontemp = classConditionObject.replace((/([\w]+)(:)/g), "\"$1\"$2");
    const correctjson = jsontemp.replace((/'/g), "\"");
    return JSON.parse(correctjson);
  }
  
  // Helper method for setting the inital value, if already set in the model.
  export function setElem(elem, valueToSet) {
    if (elem.tagName !== 'INPUT' &&
      elem.tagName !== 'SELECT') {
        elem.textContent = valueToSet;
    }
  
    switch(elem.type) {
      case 'checkbox':
        elem.checked = valueToSet;
        return valueToSet;
  
      case 'radio':
        // TODO: Improve this by replacing document with the context
        const radioToSelect = <HTMLInputElement>document.querySelector(`[value=${valueToSet}]`);
        radioToSelect.checked = true;
        return valueToSet;
        
      default: 
        elem.value = valueToSet;
        return valueToSet;
    }
  };
  
  export const cachedSetters: {
    [key: string]: Function[]
  } = {};
  