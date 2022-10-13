// Sticky navigation
const nav = document.querySelector('.nav');
const logo = document.querySelector('.logo');
const initialCoords = nav.getBoundingClientRect();
console.log(initialCoords);
window.addEventListener('scroll', function () {
  if (this.window.scrollY > initialCoords.top) {
    nav.classList.add('sticky');
    logo.src = 'https://shreethemes.in/upstart/layouts/images/logo-dark.png';
  } else {
    nav.classList.remove('sticky');
    logo.src = 'https://shreethemes.in/upstart/layouts/images/logo-light.png';
  }
});
