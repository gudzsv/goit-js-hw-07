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
  boxes.innerHTML = '';
}
