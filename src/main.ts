import '@styles/style.scss';

import { HelloWorld } from './ts/HelloWorld';

const helloWorld = new HelloWorld();
console.log(helloWorld.getStr());

window.addEventListener('DOMContentLoaded', init);

function init() {
  const h1 = document.createElement('h1');
  h1.textContent = helloWorld.getStr();
  document.querySelector('.app')?.append(h1);
}
