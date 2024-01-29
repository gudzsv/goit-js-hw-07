const input = document.querySelector('input[type="number"]');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');
const controls = document.querySelector('#controls');

createBtn.addEventListener('click', () => {
  const amount = Number(input.value);
  if (amount > 1 || amount < 100) {
    destroyBoxes();
    const boxesArray = [];
    for (let i = 0; i < amount; i += 1) {
      boxesArray.push(createBoxes(i));
    }
    input.value = '';
    boxes.append(...boxesArray);
  }
});

destroyBtn.addEventListener('click', () => {
  destroyBoxes();
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const box = document.createElement('div');
  box.style.width = `${30 + amount * 10}px`;
  box.style.height = `${30 + amount * 10}px`;
  box.style.backgroundColor = getRandomHexColor();
  return box;
}

function destroyBoxes() {
  const boxes = document.querySelector('#boxes');
  boxes.innerHTML = '';
}

//fonts
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href =
  'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap';
document.head.append(link);

// styles
controls.style.backgroundColor = '#F6F6FE';
controls.style.padding = '32px';
controls.style.display = 'flex';
controls.style.gap = '16px';
controls.style.borderRadius = '8px';
controls.style.marginBottom = '16px';

input.style.minWidth = '150px';
input.style.borderRadius = '4px';
input.style.border = '1px solid #808080';
input.style.padding = '8px ';
input.style.textAlign = 'center';
input.style.lineHeight = '1.5';
input.style.color = '#2E2F42';
input.style.letterSpacing = '0.04em';
input.style.fontFamily = 'Montserrat, sans-serif';

const buttons = document.querySelectorAll('button');
for (const btn of buttons) {
  btn.style.fontFamily = 'Montserrat, sans-serif';
  btn.style.border = 'none';
  btn.style.minWidth = '120px';
  btn.style.paddingBlock = '8px';
  btn.style.color = '#FFF';
  btn.style.fontWeight = '500';
  btn.style.borderRadius = '8px';
  btn.style.cursor = 'pointer';
  btn.style.transition = 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1)';
}

createBtn.style.backgroundColor = '#4E75FF';
createBtn.addEventListener('mouseover', () => {
  createBtn.style.backgroundColor = '#6C8CFF';
});
createBtn.addEventListener('mouseout', () => {
  createBtn.style.backgroundColor = '#4E75FF';
});

destroyBtn.style.backgroundColor = '#FF4E4E';
destroyBtn.addEventListener('mouseover', () => {
  destroyBtn.style.backgroundColor = '#FF7070';
});
destroyBtn.addEventListener('mouseout', () => {
  destroyBtn.style.backgroundColor = '#FF4E4E';
});

boxes.style.backgroundColor = '#F6F6FE';
boxes.style.borderRadius = '8px';
boxes.style.padding = '32px';
boxes.style.display = 'flex';
boxes.style.flexWrap = 'wrap';
boxes.style.gap = '16px';
