const grid = document.querySelector('.grid');

const objetos = [
  'almofada',
  'beach-ball',
  'biscoito',
  'cabide',
  'chocolate',
  'earth',
  'janela',
  'lupa',
  'pizza',
  'tabuleiro',
];

let firstCard = '';
let secondCard = '';

const checkEndGame = () => {
  const disabledCards = document.querySelectorAll('.disabled-card');

  if (disabledCards.length === 20) {
    alert('Parabéns, você ganhou');
  }
};

const checkCards = () => {
  const firstObjeto = firstCard.getAttribute('data-objeto');
  const secondObjeto = secondCard.getAttribute('data-objeto');

  if (firstObjeto === secondObjeto) {
    firstCard.firstChild.classList.add('disabled-card');
    secondCard.firstChild.classList.add('disabled-card');

    firstCard = '';
    secondCard = '';

    checkEndGame();
  } else {
    setTimeout(() => {
      firstCard.classList.remove('reveal-card');
      secondCard.classList.remove('reveal-card');

      firstCard = '';
      secondCard = '';
    }, 500);
  }
};

const revealCard = ({ target }) => {
  if (target.parentNode.className.includes('reveal-card')) {
    return;
  }

  if (firstCard === '') {
    target.parentNode.classList.add('reveal-card');
    firstCard = target.parentNode;
  } else if (secondCard === '') {
    target.parentNode.classList.add('reveal-card');
    secondCard = target.parentNode;

    checkCards();
  }

  target.parentNode.classList.add('reveal-card');
};

//cria os elementos e suas classes
const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
};

//cria cada card
const createCard = (objeto) => {
  const card = createElement('div', 'card');
  const front = createElement('div', 'face front');
  const back = createElement('div', 'face back');

  front.style.backgroundImage = `url('../assets/objetos/${objeto}.svg ')`;

  card.appendChild(front);
  card.appendChild(back);

  card.addEventListener('click', revealCard);
  card.addEventListener('touchStart', revealCard);

  card.setAttribute('data-objeto', objeto);

  return card;
};

const loadGama = () => {
  const duplicateObjetos = [...objetos, ...objetos];

  const objetosEmbaralhados = duplicateObjetos.sort(() => Math.random() - 0.5);

  objetosEmbaralhados.forEach((objeto) => {
    const card = createCard(objeto);
    grid.appendChild(card);
  });
};

loadGama();
