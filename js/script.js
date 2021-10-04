const menu = document.querySelector('#burger');
const close = document.querySelector('#close');
function showMe() {
  document.querySelector('.nav-ul').classList.toggle('open');
  document.querySelector('#close').classList.toggle('open');
  document.querySelector('.bur-btn').classList.toggle('hide');
  document.querySelector('.close').classList.toggle('hide');
  document.querySelector('.toul').classList.toggle('hide');
}
menu.addEventListener('click', showMe);
close.addEventListener('click', showMe);
