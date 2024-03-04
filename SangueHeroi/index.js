/*Klayvem Guimarães*/
/*Lucas Phelipe*/
/*Rodrigo Pereira Lopes*/
/*Rafaela*/
/*Cynthia Grayt*/
/*Bruno Cicero*/


const carouselList = document.querySelector('.carousel-list');
const carouselList2 = document.querySelector('.carousel-list2');
const nav_prototipo = document.querySelector('#acesse')
const nav_sobre = document.querySelector('#sobre');

let currentIndex = 0;

function showImage(index) {
  const newTransformValue = -index * 100 + '%';
  carouselList.style.transform = 'translateX(' + newTransformValue + ')';
  carouselList2.style.transform = 'translateX(' + newTransformValue + ')';
}

function nextImage() {
  currentIndex = (currentIndex + 1) % carouselList.children.length;
  currentIndex = (currentIndex + 1) % carouselList2.children.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + carouselList.children.length) % carouselList.children.length;
  currentIndex = (currentIndex - 1 + carouselList2.children.length) % carouselList2.children.length;
  showImage(currentIndex);
}

nav_sobre.addEventListener('click', () => {
  var div = document.getElementById("end_page")
  div.scrollIntoView({behavior: "smooth", block: "start"})
})

nav_prototipo.addEventListener('click', () => {
  var div = document.getElementById("middle_page")
  div.scrollIntoView({behavior: "smooth", block: "start"})
})

setInterval(nextImage, 3000); // Alterna a imagem a ada 3 segundos 
