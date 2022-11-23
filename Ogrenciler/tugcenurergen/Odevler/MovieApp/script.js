import {Main} from './src/scripts/index.js';

const main = new Main();

window.addEventListener('load', (e) => {
    console.log("window")
    main.mainProcess();
})