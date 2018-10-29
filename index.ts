declare var T: any;

import { Rope, RopeWrap } from './src';

// Import stylesheets
import './style.css';

@Rope()
export class DoubleBinding {
  appDiv: HTMLElement | null;
  changeMe: string;
  changeMeToo: string;
  changeMeDiv: string;

  testClass: boolean;
  booleanTest: boolean;
  booleanTest2: boolean;
  selectTest: number;
  radioTest: string;

  constructor() {
    this.appDiv = document.getElementById('app');
    this.changeMe = 'test me';
    this.changeMeToo = 'test me too';
    this.changeMeDiv = 'hello from code';

    this.testClass = false;

    this.booleanTest = true;
    this.booleanTest2 = true;

    this.selectTest = 11;

    this.radioTest = 'male';

    if(this.appDiv) {
      this.appDiv.innerHTML = `<h1>JS Starter</h1>`;
    }
  }
}

// const doubleBind = new DoubleBinding();

T.Module.RopeTest = T.createModule({
  start(resolve: any) {
    this.appDiv = document.getElementById('app');
    this.changeMe = 'test me';
    this.changeMeToo = 'test me too';
    this.changeMeDiv = 'hello from code';

    this.testClass = false;

    this.booleanTest = true;
    this.booleanTest2 = true;

    this.selectTest = 11;

    this.radioTest = 'male';

    if(this.appDiv) {
      this.appDiv.innerHTML = `<h1>JS Starter</h1>`;
    }
    resolve();

    timeoutChange(this);
  }
});

RopeWrap(T.Module.RopeTest);

function timeoutChange(context: any) {
  setTimeout(() => {
    context.changeMe = 'I am changed!';
    context.changeMeToo = 'I am changed too!';
    context.radioTest = 'female';
    // context.changeMeDiv = 'hello again';
    // context.testClass = true;

  }, 1000);
  setTimeout(() => {
    context.changeMe = 'I am changed again!';
    context.booleanTest = false;
    context.selectTest = 17;
    context.radioTest = 'other';
    // context.testClass = false;

  }, 3000);

  setTimeout(() => {
    console.log(context);

  }, 5000);
}

const application = new T.Application();
application.registerModules();
application.start();