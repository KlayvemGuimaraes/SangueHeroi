const carouselList = document.querySelector('.carousel-list');
const carouselList2 = document.querySelector('.carousel-list2');
const nav_prototipo = document.querySelector('#acesse');
const nav_sobre = document.querySelector('#sobre');

const botaoInstagram = document.querySelector('#botaoInstagram');
const botaoPrototipo = document.querySelector('#botaoPrototipo');
const botaoSaibaMais = document.querySelector('#botaoSaibaMais');

let currentIndex = 0;

function showImage(index) {
  const newTransformValue = -index * 100 + '%';
  carouselList.style.transform = 'translateX(' + newTransformValue + ')';
  carouselList2.style.transform = 'translateX(' + newTransformValue + ')';
}

function nextImage() {
  currentIndex = (currentIndex + 1) % carouselList.children.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + carouselList.children.length) % carouselList.children.length;
  showImage(currentIndex);
}

nav_sobre.addEventListener('click', () => {
  var div = document.getElementById("end_page");
  div.scrollIntoView({behavior: "smooth", block: "start"});
});

nav_prototipo.addEventListener('click', () => {
  var div = document.getElementById("middle_page");
  div.scrollIntoView({behavior: "smooth", block: "start"});
});

setInterval(nextImage, 3000); // Alterna a imagem a cada 3 segundos 

function redirecionarInstagram() {
  window.location.href = "https://www.instagram.com/sanguee_heroi/?hl=en";
}

function redirecionarPrototipo() {
  window.location.href = "https://www.figma.com/file/IeffJhGB8PxTDoWmI33Rj6/Untitled?type=design&node-id=0%3A1&mode=design&t=LUOrt5UOdsgh0367-1";
}

function redirecionarSaibaMais() {
  window.location.href = "https://www.google.com";
}

botaoInstagram.addEventListener("click", redirecionarInstagram);
botaoPrototipo.addEventListener("click", redirecionarPrototipo);
botaoSaibaMais.addEventListener("click", redirecionarSaibaMais);
