const categories = document.querySelector('#categories');
const h2 = [...categories.querySelectorAll('h2')].map(
  h2 => `Category: ${h2.innerText}`
);
const elementsLength = [...categories.querySelectorAll('ul')].map(
  elem => `Elements: ${elem.querySelectorAll('li').length}`
);
console.log(`Number of categories: ${h2.length}`);
for (let i = 0; i < h2.length; i++) {
  console.log(h2[i]);
  console.log(elementsLength[i]);
}
