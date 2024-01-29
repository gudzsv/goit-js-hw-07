const btn = document.querySelector('.change-color');
btn.addEventListener('click', () => {
  const color = getRandomHexColor();
  document.querySelector('body').style.backgroundColor = color;
  document.querySelector('.color').style.color = color;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

//fonts
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href =
  'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap';
document.head.append(link);

//styles
btn.style.display = 'block';
btn.style.marginTop = '16px';
btn.style.minWidth = '148px';
btn.style.paddingBlock = '8px';
btn.style.backgroundColor = '#4E75FF';
btn.style.color = '#FFF';
btn.style.fontWeight = '500';
btn.style.border = 'none';
btn.style.borderRadius = '8px';
btn.style.cursor = 'pointer';
btn.style.transition = 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1)';

btn.addEventListener('mouseover', () => {
  btn.style.backgroundColor = '#6C8CFF';
});
btn.addEventListener('mouseout', () => {
  btn.style.backgroundColor = '#4E75FF';
});
