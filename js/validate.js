const form = document.querySelector('#form');
const msg = document.querySelector('#massage');
form.addEventListener('submit', (event) => {
  const vmail = document.getElementById('email').value;
  if (vmail.toLowerCase() !== vmail) {
    msg.innerHTML = 'Please fill the email with lower case letters';
    event.preventDefault();
  }
});
