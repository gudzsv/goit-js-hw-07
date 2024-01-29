// Task 1
const numbOfCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${numbOfCategories.length}`);

numbOfCategories.forEach(item => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});

//fonts
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href =
  'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap';
document.head.append(link);

// reset styles
const uls = document.getElementsByTagName('ul');
for (const ul of uls) {
  ul.style.listStyleType = 'none';
  ul.style.padding = '0';
}

// create container
const container = document.querySelector('#categories');
container.style.display = 'flex';
container.style.flexDirection = 'column';
container.style.gap = '24px';
container.style.maxWidth = '392px';
container.style.margin = '0 auto';
container.style.padding = '24px';
container.style.listStyleType = 'none';
container.style.borderRadius = '8px';
container.style.backgroundColor = '#FFF';

//Add styles
const body = document.querySelector('body');
body.style.color = '#2E2F42';
body.style.fontFamily = 'Montserrat, sans-serif';
body.style.letterSpacing = '0.04em';

const title = document.getElementsByTagName('h2');
for (const t of title) {
  t.style.margin = '0 0 16px 0';
  t.style.fontSize = '24px';
  t.style.fontWeight = '600';
  t.style.lineHeight = '1.33';
}

const items = document.querySelectorAll('.item');
for (const item of items) {
  item.style.padding = '16px';
  item.style.borderRadius = '8px';
  item.style.backgroundColor = '#F6F6FE';
}

const childLists = document.querySelectorAll('.item ul');
for (const childList of childLists) {
  childList.style.display = 'flex';
  childList.style.flexDirection = 'column';
  childList.style.gap = '8px';
}

const childItems = document.querySelectorAll('.item li');
for (const childItem of childItems) {
  childItem.style.padding = '8px 16px';
  childItem.style.borderRadius = '4px';
  childItem.style.border = '1px solid #808080';
  childItem.style.lineHeight = '1.5';
}
