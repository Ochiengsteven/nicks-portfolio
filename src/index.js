import assn from './assets/assn.png';
import './styles/style.css';

const test = document.createElement('h2');
test.innerText = 'Hello World';

const page = document.querySelector('body');
page.appendChild(test);

const img = new Image();
img.src = assn;
page.appendChild(img);
