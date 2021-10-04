const menu = document.querySelector('.mob-nav');
function showMe() {
  document.querySelector('.nav-ul').classList.toggle('open');
  document.querySelector('#close').classList.toggle('open');
  document.querySelector('.bur-btn').classList.toggle('hide');
}
menu.addEventListener('click', showMe);