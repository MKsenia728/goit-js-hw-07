const inputEl = document.getElementById('name-input');
const spanEl = document.getElementById('name-output');

inputEl.addEventListener('input', () => {
  const inputName = inputEl.value.trim();
  if (inputName) {
     spanEl.textContent = inputName;
  } else {
    spanEl.textContent = 'Anonymous';
  }
})
