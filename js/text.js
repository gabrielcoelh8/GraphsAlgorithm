import { textSort } from '../js/data.js';

const textLad = document.querySelector('#text-lad'),
  opPrincipais = document.querySelectorAll('.option-submenu');

window.onload = (e) => {
  textLad.innerHTML = textSort[0].text;
};

for (let x = 0; x < textSort.length; x++) {
  const elements = opPrincipais[x].getElementsByTagName("a");
  for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    element.addEventListener("click", () => {
      textLad.innerHTML = textSort[x].text;
    })
  }
};