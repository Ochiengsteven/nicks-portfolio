import logo from './assets/logo.png';
import './styles/style.css';

const logoimg = new Image();
logoimg.src = logo;

const emblem = document.querySelector('.logo');
emblem.appendChild(logoimg);

function animateCounter(target, startValue, endValue, duration) {
  const range = endValue - startValue;
  const increment = endValue > startValue ? 1 : -1;
  const stepTime = Math.abs(Math.floor(duration / range));

  let currentValue = startValue;
  const timer = setInterval(() => {
    currentValue += increment;
    target.textContent = currentValue;

    if (currentValue === endValue) {
      clearInterval(timer);
    }
  }, stepTime);
}

const projectsCounter = document.getElementById('projects-counter');
const experienceCounter = document.getElementById('experience-counter');

animateCounter(projectsCounter, 0, 100, 1000); // Update endValue and duration as desired
animateCounter(experienceCounter, 0, 4, 2000); // Update endValue and duration as desired
