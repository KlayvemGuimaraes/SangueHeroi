/*Klayvem Guimarães*/
/*Lucas Felipe*/
/*Rodrigo Pereira Lopes*/
/*Rafaela*/
/*Cynthia Grayt*/
/*Bruno Sicero*/

const carouselList = document.querySelector('.carousel-list');
let currentIndex = 0;

function showImage(index) {
  const newTransformValue = -index * 100 + '%';
  carouselList.style.transform = 'translateX(' + newTransformValue + ')';
}

function nextImage() {
  currentIndex = (currentIndex + 1) % carouselList.children.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + carouselList.children.length) % carouselList.children.length;
  showImage(currentIndex);
}

setInterval(nextImage, 3000); // Alterna a imagem a ada 3 segundos 