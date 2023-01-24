const drops = document.querySelectorAll('.dropzone');
const forma = document.querySelector('.forma');

const shapes = ['quadrado', 'triangulo', 'circulo'];

const corretoAudio = document.querySelector('.audio-acerto');
const erradoAudio = document.querySelector('.audio-erro');

//Escolher qual vai ser a peça a ser movida
const escolherPeca = (shapes) => {
  const pecaEscolhida = shapes[Math.floor(Math.random() * shapes.length)];

  //checar se não era a mesma da anterior
  if (pecaEscolhida === forma.classList[1]) {
    escolherPeca(shapes);
  } else {
    criarPeca(pecaEscolhida);
  }
  return;
};

//Cria a peça dentro do HTML
const criarPeca = (pecaEscolhida) => {
  const imagem = document.createElement('img');

  imagem.src = `/../img/${pecaEscolhida}-peca.svg`;
  imagem.draggable = true;
  forma.appendChild(imagem);
  forma.classList.add(pecaEscolhida);

  return;
};

var drg, drgT, drgL, drgB, drgR;
var el, avail;

function dragStart(evt) {
  el = evt.target;
  if (el.getAttribute('draggable') == 'true') {
    avail = 'available';
    forma.classList.remove('float');
  } else {
    avail = '';
  }
}

function drag(evt) {
  if (avail == 'available') {
    el.style.position = 'absolute';
    el.style.left = evt.touches[0].clientX - el.clientWidth / 2;
    el.style.top = evt.touches[0].clientY - el.clientHeight / 2;

    drg = el.getBoundingClientRect();
    drgT = drg.top;
    drgB = drg.bottom;
    drgL = drg.left;
    drgR = drg.right;
  } else {
  }
  evt.preventDefault();
}

function drop() {
  const objeto = el;
  drops.forEach((dropzone) => {
    if (dropzone.className.includes(forma.classList[1])) {
      var drp = dropzone.getBoundingClientRect();

      var drpT = drp.top,
        drpL = drp.left,
        drpB = drp.bottom,
        drpR = drp.right;

      if (avail == 'available') {
        if (drpT < drgT && drpL < drgL && drpB > drgB && drpR > drgR) {
          // dropzone.appendChild(el);
          corretoAudio.play();
          el.style.position = '';
          el.setAttribute('draggable', 'false');

          forma.removeChild(el);
          escolherPeca(shapes);
          forma.classList.remove(forma.classList[1]);
        } else if (el.draggable) {
          erradoAudio.play();
          forma.appendChild(el);
          el.style.position = '';
          forma.classList.add('float');
        }
      }
    }
  });
}

const loadGame = () => {
  escolherPeca(shapes);
};
loadGame();
