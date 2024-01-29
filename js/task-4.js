// Task 4

const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  if (email.value.trim() === '' || password.value.trim() === '') {
    alert('All form fields must be filled in');
  } else {
    const formData = {
      email: email.value.trim(),
      password: password.value.trim(),
    };
    console.log(formData);
    event.currentTarget.reset();
  }
}

//fonts
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href =
  'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap';
document.head.append(link);

// styles
const body = document.querySelector('body');
body.style.color = '#2E2F42';
body.style.fontFamily = 'Montserrat, sans-serif';
body.style.letterSpacing = '0.04em';

form.style.maxWidth = '408px';
form.style.margin = '0 auto';
form.style.padding = '24px';
form.style.borderRadius = '8px';
form.style.backgroundColor = '#FFF';

const inputs = document.querySelectorAll('input');
for (const input of inputs) {
  input.style.display = 'block';
  input.style.width = '100%';
  input.style.borderRadius = '4px';
  input.style.border = '1px solid #808080';
  input.style.padding = '8px 16px';
  input.style.lineHeight = '1.5';
}

const label = document.querySelector('label');
label.style.display = 'block';
label.style.marginBottom = '8px';

const button = document.querySelector('button');
button.style.display = 'block';
button.style.marginTop = '16px';
button.style.minWidth = '86px';
button.style.padding = '8px 0';
button.style.backgroundColor = '#4E75FF';
button.style.color = '#FFF';
button.style.fontWeight = '500';
button.style.border = 'none';
button.style.borderRadius = '8px';
button.style.cursor = 'pointer';
button.style.transition = 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1)';

button.addEventListener('mouseover', () => {
  button.style.backgroundColor = '#6C8CFF';
});
button.addEventListener('mouseout', () => {
  button.style.backgroundColor = '#4E75FF';
});
