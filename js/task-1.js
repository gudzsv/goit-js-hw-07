const numbOfCategories = document.querySelectorAll('.item');

console.log(`Number of categories: ${numbOfCategories.length}`);

numbOfCategories.forEach(item => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
