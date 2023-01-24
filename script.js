//Script do seleção formas

const grid = document.querySelector('.grid');
const referencia = document.querySelector('#referencia');
const shapes = ['quadrado', 'retangulo', 'triangulo', 'circulo'];

const errorAudio = document.querySelector('.erro-audio');
const acertoAudio = document.querySelector('.correto-audio');

// armazena quantas formas foram selecionadas no grid - contada em cardSelected
let qtdSelecionadas = 0;
let cardsCorretos = 0;

function ganhou() {
  if (cardsCorretos == qtdSelecionadas) {
    resetGame();
    loadGame();
  } else {
    return false;
  }
}

//apaga os elementos criados e reinicia as variáveis de controle
function resetGame() {
  qtdSelecionadas = 0;
  cardsCorretos = 0;
  grid.innerText = '';
  referencia.innerText = '';
}

//sempre que o usuário aperta em uma forma do grid
const cardSelected = ({ target }) => {
  const card = target.parentNode.className;
  if (card.includes(referencia.classList[0])) {
    target.parentNode.classList.add('selecionado');
    acertoAudio.play();

    // só soma no qtdSelecionado se apertou a primeira vez
    if (!card.includes('selecionado')) {
      qtdSelecionadas++;
      ganhou();
    }
  } else {
    errorAudio.play();
  }
};

const createCard = (shape) => {
  const card = document.createElement('div');
  const imagem = document.createElement('img');

  card.className = 'card';
  card.classList.add(shape);
  imagem.src = `assets/${shape}.svg`;

  card.appendChild(imagem);

  imagem.addEventListener('click', cardSelected);

  return card;
};

//Cria a referência dentro do HTML
const createReferencia = (shape) => {
  const imagem = document.createElement('img');

  //retirou a class botao
  referencia.className = shape;
  imagem.src = `assets/${shape}.svg`;

  return imagem;
};

//Escolhe a referência com base em sorteio e se possui pelo menos duas da escolhida no grid
function referenciaEscohida(formasGrid) {
  //Seleciona a raferência
  const referenciaForma = shapes[Math.floor(Math.random() * shapes.length)];
  console.log(referenciaForma);

  cardsCorretos = 0; //reiniciar para quando a função é chamada mais uma vez

  //conta quantas vezes a forma de referência aparece no grid
  // let contador = 0;
  for (var i = 0; i < 9; i++) {
    if (referenciaForma === formasGrid[i]) {
      cardsCorretos++;
    }
  }

  //checa se existe pelo menos duas formas no grid igual a da referência
  if (cardsCorretos > 1) {
    referencia.appendChild(createReferencia(referenciaForma));
  } else {
    //caso não a mesma função é chamada outra vez
    referenciaEscohida(formasGrid);
  }
}

const loadGame = () => {
  //vetor que guarda todas as formas geradas no grid
  const formasGrid = Array();

  //Cria as formas no grid
  for (var i = 0; i < 9; i++) {
    formasGrid.push(shapes[Math.floor(Math.random() * shapes.length)]);
    grid.appendChild(createCard(formasGrid[i]));
  }

  //função responsável por escolher a forma de referência
  referenciaEscohida(formasGrid);
};

loadGame();
