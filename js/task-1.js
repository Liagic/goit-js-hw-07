const elements = document.querySelectorAll('#categories > .item');
console.log(`Number of categories: ${elements.length}`);
elements.forEach(element => {
  console.log(`Category: ${element.querySelector('h2').textContent}`);
  console.log(
    `Elements: ${element.querySelector('ul').querySelectorAll('li').length}`
  );
});
