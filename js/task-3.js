const inputValue = document.querySelector('#name-input');
const outputValue = document.querySelector('#name-output');
inputValue.addEventListener('input', event => {
  if (event.target.value.trim().length > 0) {
    outputValue.textContent = event.target.value.trim();
  } else {
    outputValue.textContent = 'Anonymous';
  }
});
