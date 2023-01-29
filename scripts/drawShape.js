//animações
const circulo = new Vivus('circulo', {
  type: 'oneByOne',
  start: 'manual',
});
const circuloEarth = new Vivus('circuloEarth', {
  type: 'oneByOne',
  start: 'manual',
});
const circuloLupa = new Vivus('circuloLupa', {
  type: 'oneByOne',
  start: 'manual',
});

const quadrado = new Vivus('quadrado', {
  type: 'oneByOne',
  start: 'manual',
});
const quadradoAlmofada = new Vivus('quadradoAlmofada', {
  type: 'oneByOne',
  start: 'manual',
});
const quadradoBiscoito = new Vivus('quadradoBiscoito', {
  type: 'oneByOne',
  start: 'manual',
});

const triangulo = new Vivus('triangulo', {
  type: 'oneByOne',
  start: 'manual',
});
const trianguloCabide = new Vivus('trianguloCabide', {
  type: 'oneByOne',
  start: 'manual',
});
const trianguloPizza = new Vivus('trianguloPizza', {
  type: 'oneByOne',
  start: 'manual',
});

const retanguloTV = new Vivus('retanguloTV', {
  type: 'oneByOne',
  start: 'manual',
});
const retanguloJanela = new Vivus('retanguloJanela', {
  type: 'oneByOne',
  start: 'manual',
});
const retanguloChocolate = new Vivus('retanguloChocolate', {
  type: 'oneByOne',
  start: 'manual',
});

//objetos
const objetos = ['beach-ball', 'earth'];
const slide = document.querySelectorAll('.embla__slide');

//Efeitos sonoros
const circuloAudio = document.querySelector('.circulo-audio');
const quadradoAudio = document.querySelector('.quadrado-audio');
const trianguloAudio = document.querySelector('.triangulo-audio');
const retanguloAudio = document.querySelector('.retangulo-audio');

// slide
var emblaNode = document.querySelector('.embla');
var options = { loop: true, align: 0.44 }; //para centralizar e ficar infinito
var plugins = [EmblaCarouselAutoplay()]; // Plugins

var embla = EmblaCarousel(emblaNode, options, plugins);

// Para iniciar o primeiro do slide
circulo.play();
circuloAudio.play(); //não toca pois não existem interações antes
slide[0].style.backgroundImage = "url('assets/beach-ball.svg')";
slide[0].style.backgroundPosition = 'center left';
slide[0].style.backgroundRepeat = 'no-repeat';

const onSelect = () => {
  const slideAtual = embla.selectedScrollSnap(); //Retorna a posição do slide atual

  if (slideAtual == 0) {
    circuloAudio.load();
    slide[slideAtual].style.backgroundImage = "url('assets/beach-ball.svg')";
    slide[slideAtual].style.backgroundPosition = 'center left';
    slide[slideAtual].style.backgroundRepeat = 'no-repeat';

    circulo.play();
    circuloAudio.play();
  } else {
    circulo.reset();
  }
  if (slideAtual == 1) {
    quadradoAudio.load();
    slide[slideAtual].style.backgroundImage = "url('assets/tabuleiro.svg')";
    slide[slideAtual].style.backgroundPosition = 'center left';
    slide[slideAtual].style.backgroundRepeat = 'no-repeat';

    quadrado.play();
    quadradoAudio.play();
  } else {
    quadrado.reset();
  }
  if (slideAtual == 2) {
    trianguloAudio.load();
    slide[slideAtual].style.backgroundImage =
      "url('assets/trianguloInstrumento.svg')";
    slide[slideAtual].style.backgroundPosition = 'center left';
    slide[slideAtual].style.backgroundRepeat = 'no-repeat';

    triangulo.play();
    trianguloAudio.play();
  } else {
    triangulo.reset();
  }
  if (slideAtual == 3) {
    retanguloAudio.load();
    slide[slideAtual].style.backgroundImage = "url('assets/tv-retro.svg')";
    slide[slideAtual].style.backgroundPosition = 'center left';
    slide[slideAtual].style.backgroundRepeat = 'no-repeat';

    retanguloTV.play();
    retanguloAudio.play();
  } else {
    retanguloTV.reset();
  }

  if (slideAtual == 4) {
    circuloAudio.load();
    slide[slideAtual].style.backgroundImage = "url('assets/earth.svg')";
    slide[slideAtual].style.backgroundPosition = 'center left';
    slide[slideAtual].style.backgroundRepeat = 'no-repeat';

    circuloEarth.play();
    circuloAudio.play();
  } else {
    circuloEarth.reset();
  }
  if (slideAtual == 5) {
    quadradoAudio.load();
    slide[slideAtual].style.backgroundImage = "url('assets/almofada.svg')";
    slide[slideAtual].style.backgroundPosition = 'center left';
    slide[slideAtual].style.backgroundRepeat = 'no-repeat';

    quadradoAlmofada.play();
    quadradoAudio.play();
  } else {
    quadradoAlmofada.reset();
  }
  if (slideAtual == 6) {
    trianguloAudio.load();
    slide[slideAtual].style.backgroundImage = "url('assets/cabide.svg')";
    slide[slideAtual].style.backgroundPosition = 'bottom left';
    slide[slideAtual].style.backgroundRepeat = 'no-repeat';

    trianguloCabide.play();
    trianguloAudio.play();
  } else {
    trianguloCabide.reset();
  }
  if (slideAtual == 7) {
    retanguloAudio.load();
    slide[slideAtual].style.backgroundImage = "url('assets/janela.svg')";
    slide[slideAtual].style.backgroundPosition = 'center left';
    slide[slideAtual].style.backgroundRepeat = 'no-repeat';

    retanguloJanela.play();
    retanguloAudio.play();
  } else {
    retanguloJanela.reset();
  }

  if (slideAtual == 8) {
    circuloAudio.load();
    slide[slideAtual].style.backgroundImage = "url('assets/lupa.svg')";
    slide[slideAtual].style.backgroundPosition = 'top left';
    slide[slideAtual].style.backgroundRepeat = 'no-repeat';
    slide[slideAtual].style.backgroundSize = 'contain';

    circuloLupa.play();
    circuloAudio.play();
  } else {
    circuloLupa.reset();
  }
  if (slideAtual == 9) {
    quadradoAudio.load();
    slide[slideAtual].style.backgroundImage = "url('assets/biscoito.svg')";
    slide[slideAtual].style.backgroundPosition = 'center left';
    slide[slideAtual].style.backgroundRepeat = 'no-repeat';

    quadradoBiscoito.play();
    quadradoAudio.play();
  } else {
    quadradoBiscoito.reset();
  }
  if (slideAtual == 10) {
    trianguloAudio.load();
    slide[slideAtual].style.backgroundImage = "url('assets/pizza.svg')";
    slide[slideAtual].style.backgroundPosition = 'center left';
    slide[slideAtual].style.backgroundRepeat = 'no-repeat';

    trianguloPizza.play();
    trianguloAudio.play();
  } else {
    trianguloPizza.reset();
  }
  if (slideAtual == 11) {
    retanguloAudio.load();
    slide[slideAtual].style.backgroundImage = "url('assets/chocolate.svg')";
    slide[slideAtual].style.backgroundPosition = 'center left';
    slide[slideAtual].style.backgroundRepeat = 'no-repeat';

    retanguloChocolate.play();
    retanguloAudio.play();
  } else {
    retanguloChocolate.reset();
  }
};

embla.on('select', onSelect); // Add event listener

const onSlideClick = () => {
  console.log('teste');
};

embla.slideNodes().forEach((slideNode, index) => {
  slideNode.addEventListener('drag', () => onSlideClick());
});
