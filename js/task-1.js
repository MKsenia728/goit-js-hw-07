const listElementsLiItem = document.querySelectorAll('.item');

console.log(`Number of categories: ${listElementsLiItem.length}`);

console.log();

listElementsLiItem.forEach(el => {
  console.log(`Category: ${el.firstElementChild.textContent}`);
  console.log(`Elements: ${el.querySelectorAll('ul li').length}`);
});
