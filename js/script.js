const menu = document.querySelector('#burger');
const close = document.querySelector('#close');
const ul2 = document.querySelector('.ul2');

function showMe() {
  document.querySelector('.nav-ul').classList.toggle('open');
  document.querySelector('#close').classList.toggle('open');
}
menu.addEventListener('click', showMe);
close.addEventListener('click', showMe);
ul2.addEventListener('click', showMe);