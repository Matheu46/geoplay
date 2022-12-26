const grid = document.querySelector('.grid');
const referencia = document.querySelector('#referencia');
const shapes = ['quadrado', 'retangulo', 'triangulo', 'circulo'];
const errorAudio = document.querySelector('.erro-audio');
console.log(errorAudio);

const cardSelected = ({ target }) => {
  if (target.className.includes(referencia.classList[0])) {
    target.parentNode.classList.add('selecionado');
  } else {
    errorAudio.play();
  }
  console.log(target.parentNode);
};

const createCard = (shape) => {
  const card = document.createElement('div');
  const botao = document.createElement('div');
  const imagem = document.createElement('img');
  card.className = 'card';
  botao.className = 'botao';
  imagem.className = shape;
  imagem.src = `assets/${shape}.svg`;

  botao.appendChild(imagem);
  card.appendChild(botao);
  imagem.addEventListener('click', cardSelected);

  return card;
};

const createReferencia = (shape) => {
  const imagem = document.createElement('img');

  //retirou a class botao
  referencia.className = shape;
  imagem.src = `assets/${shape}.svg`;

  return imagem;
};

const loadGame = () => {
  referencia.appendChild(
    createReferencia(shapes[Math.floor(Math.random() * shapes.length)]),
  );

  for (var i = 0; i < 9; i++) {
    grid.appendChild(
      createCard(shapes[Math.floor(Math.random() * shapes.length)]),
    );
  }
};

loadGame();
