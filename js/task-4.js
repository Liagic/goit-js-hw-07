function checkForm(event) {
  event.preventDefault();
  const email = event.target.elements.email.value.trim();
  const password = event.target.elements.password.value;
  if (email === '' || password === '') {
    alert('All form fields must be filled in');
    return;
  }
  event.target.reset();
  console.log({ email, password });
}
const registerForm = document.querySelector('.login-form');
registerForm.addEventListener('submit', checkForm);
