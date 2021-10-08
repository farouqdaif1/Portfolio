// const form = document.querySelector('#form');
const iname = document.querySelector('#full-name');
const iemail = document.querySelector('#email');
const itext = document.querySelector('#texta');
const submit = document.querySelector('.submit');
function SlocalStorage() {
  const lname = iname.value;
  const lemail = iemail.value;
  const ltext = itext.value;
  localStorage.setItem('full-name', lname);
  localStorage.setItem('email', lemail);
  localStorage.setItem('textArea', ltext);
}
function fillData() {
  const sortedName = localStorage.getItem('full-name');
  const sortedEmail = localStorage.getItem('email');
  const sortedText = localStorage.getItem('textArea');
  iname.value = sortedName;
  iemail.value = sortedEmail;
  itext.value = sortedText;
}
if (localStorage.getItem('full-name')) {
  fillData();
} else {
  SlocalStorage();
}

submit.addEventListener('click', SlocalStorage);