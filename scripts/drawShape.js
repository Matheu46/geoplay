//animações
const circulo = new Vivus('circulo', {
  type: 'oneByOne',
  start: 'manual',
});
const quadrado = new Vivus('quadrado', {
  type: 'oneByOne',
  start: 'manual',
});
const triangulo = new Vivus('triangulo', {
  type: 'oneByOne',
  start: 'manual',
});
const retangulo = new Vivus('retangulo', {
  type: 'oneByOne',
  start: 'manual',
});

//Efeitos sonoros
const circuloAudio = document.querySelector('.circulo-audio');
const quadradoAudio = document.querySelector('.quadrado-audio');
const trianguloAudio = document.querySelector('.triangulo-audio');

// slide
var emblaNode = document.querySelector('.embla');
var options = { loop: true, align: 0.4 }; //para centralizar e ficar infinito
var plugins = [EmblaCarouselAutoplay()]; // Plugins

var embla = EmblaCarousel(emblaNode, options, plugins);

// Para iniciar o primeiro do slide
circulo.play();
circuloAudio.play(); //não toca pois não existem interações antes

const onSelect = () => {
  const slideAtual = embla.selectedScrollSnap(); //Retorna a posição do slide atual

  if (slideAtual == 0) {
    circulo.play();
    circuloAudio.play();
  } else {
    circulo.reset();
  }
  if (slideAtual == 1) {
    quadrado.play();
    quadradoAudio.play();
  } else {
    quadrado.reset();
  }
  if (slideAtual == 2) {
    triangulo.play();
    trianguloAudio.play();
  } else {
    triangulo.reset();
  }
  if (slideAtual == 3) {
    retangulo.play();
    retanguloAudio.play();
  } else {
    retangulo.reset();
  }
};

embla.on('select', onSelect); // Add event listener

const onSlideClick = () => {
  console.log('teste');
};

embla.slideNodes().forEach((slideNode, index) => {
  slideNode.addEventListener('drag', () => onSlideClick());
});
