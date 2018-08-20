import {
    getElemArray,
    setChangeListener,
    setElem,
    cachedSetters
  } from './utils';
  
  export function ropeDouble(boundValues, classInstance) {
      const ropeDouble = getElemArray('[data-g-rope]');
  
       ropeDouble.forEach(elem => {
        
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
  function defineBinding(elem, propName, boundValues, classInstance) {
  
    // Add the current value of the property, to our value cache.
    boundValues[propName] = boundValues[propName] ?
      boundValues[propName] :
      classInstance[propName];
  
    const newSetter = (newValue) => {
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
  
    // Set the event listener, that listens to the change event,
    // and updates our corresponding class property.
    setChangeListener(elem, propName, classInstance);
  
    // Set the initial value, that is in the class property, to our element.
    setElem(elem, boundValues[propName]);
  }
  