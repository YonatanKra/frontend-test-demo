import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import {setupCounter, unsetCounter} from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
      <button id="toggle-counter">Toggle Counter Abilities</button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

const counterButton = document.querySelector<HTMLButtonElement>('#counter')!;
setupCounter(counterButton!);
document.querySelector('#toggle-counter')!.addEventListener('click', () => {
    if (counterButton.innerText === '') {
        setupCounter(counterButton);
        return;
    }
    unsetCounter(counterButton);
});


