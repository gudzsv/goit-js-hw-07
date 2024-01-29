// Task 3
const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');
input.addEventListener('input', onInputChange);

function onInputChange(event) {
  if (event.currentTarget.value.trim() === '') {
    output.textContent = 'Anonymous';
  } else {
    output.textContent = event.currentTarget.value.trim();
  }
}

// fonts
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href =
  'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap';
document.head.append(link);

// default styles
const body = document.querySelector('body');
body.style.color = '#2E2F42';
body.style.fontFamily = 'Montserrat, sans-serif';
body.style.letterSpacing = '0.04em';

// Input styles
input.style.display = 'block';
input.style.minWidth = '360px';
input.style.borderRadius = '4px';
input.style.border = '1px solid #808080';
input.style.padding = '8px 16px';
input.style.lineHeight = '1.5';
