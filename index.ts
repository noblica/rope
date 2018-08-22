import { Rope } from './src';

// Import stylesheets
// import './style.css';

@Rope()
export class DoubleBinding {
  appDiv: HTMLElement | null;
  changeMe: string;
  changeMeToo: string;
  changeMeDiv: string;

  testClass: boolean;
  booleanTest: boolean;
  selectTest: number;
  radioTest: string;

  constructor() {
    this.appDiv = document.getElementById('app');
    this.changeMe = 'test me';
    this.changeMeToo = 'test me too';
    this.changeMeDiv = 'hello from code';

    this.testClass = false;

    this.booleanTest = true;

    this.selectTest = 11;

    this.radioTest = 'male';

    if(this.appDiv) {
      this.appDiv.innerHTML = `<h1>JS Starter</h1>`;
    }

    const checkbox = document.querySelector('.my-checkbox');
  }
}

const doubleBind = new DoubleBinding();

setTimeout(() => {
  doubleBind.changeMe = 'I am changed!';
  doubleBind.changeMeToo = 'I am changed too!';
  doubleBind.radioTest = 'female';
  // doubleBind.changeMeDiv = 'hello again';
  // doubleBind.testClass = true;

}, 1000);
setTimeout(() => {
  doubleBind.changeMe = 'I am changed again!';
  doubleBind.booleanTest = false;
  doubleBind.selectTest = 17;
  doubleBind.radioTest = 'other';
  // doubleBind.testClass = false;

}, 3000);

setTimeout(() => {
  console.log(doubleBind);

}, 5000);