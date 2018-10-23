import { ropeOut } from './rope-out';
import { ropeIn } from './rope-in';
import { ropeDouble } from './rope-double';
import { ropeClass } from './rope-class';

// Using a decorator, because decorators rule.

export function Rope(context?: any) {
  return <T extends { new (...args: any[]): {} }>(originalConstructor: T) => {
    return class extends originalConstructor {
      constructor(...args: any[]) {
        // We need a class instance, that's why we're basically
        // extending the current one
        super(...args);

        const boundValues = {};

        ropeDouble(boundValues, this);
        ropeOut(boundValues, this);
        ropeIn(boundValues, this);
        ropeClass(boundValues, this);
      }
    };
  };
}
