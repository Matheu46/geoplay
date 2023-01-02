// document.addEventListener('DOMContentLoaded', () => {
//   const pincel = {
//     ativo: false,
//     movendo: false,
//     pos: { x: 0, y: 0 },
//     posAnterior: null,
//   };

//   const canvas = document.querySelector('#canvas');
//   const ctx = canvas.getContext('2d');

//   // canvas.width = 700;
//   // canvas.height = 500;
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;

//   const desenhar = (linha) => {
//     ctx.beginPath();
//     ctx.moveTo(linha.posAnterior.x, linha.posAnterior.y);
//     ctx.lineTo(linha.pos.x, linha.pos.y);
//     ctx.stroke();
//   };

//   canvas.onmousedown = (event) => {
//     pincel.ativo = true;
//     document.getElementById('info').style.display = 'none';
//   };
//   canvas.addEventListener('touchstart', function (event) {
//     pincel.ativo = true;
//     pincel.pos.x = event.touches[0].clientX;
//     pincel.pos.y = event.touches[0].clientY;
//     document.getElementById('info').style.display = 'none';
//   });

//   canvas.onmouseup = (event) => {
//     pincel.ativo = false;
//   };
//   canvas.addEventListener('touchend', function (event) {
//     pincel.ativo = false;
//   });

//   canvas.onmousemove = (event) => {
//     if (pincel.ativo) {
//       pincel.pos.x = event.clientX;
//       pincel.pos.y = event.clientY;
//       pincel.movendo = true;
//     }
//   };
//   canvas.addEventListener('touchmove', function (event) {
//     pincel.pos.x = event.touches[0].clientX;
//     pincel.pos.y = event.touches[0].clientY;
//     pincel.movendo = true;
//   });

//   const ciclo = () => {
//     if (pincel.ativo && pincel.movendo) {
//       desenhar({ pos: pincel.pos, posAnterior: pincel.posAnterior });
//       pincel.movendo = false;
//     }
//     pincel.posAnterior = { x: pincel.pos.x, y: pincel.pos.y };

//     setTimeout(ciclo, 10);
//   };

//   ciclo();
// });

// Obtém o elemento canvas e o contexto de desenho
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

// tamanho do canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Variáveis para armazenar a posição atual do toque
var x = 0;
var y = 0;

// Flag para indicar se o usuário está tocando o canvas
var touchActive = false;

// Adiciona o evento de toque no canvas
canvas.addEventListener('touchstart', function (event) {
  touchActive = true;
  x = event.touches[0].clientX;
  y = event.touches[0].clientY;
  document.getElementById('info').style.display = 'none';
});
canvas.onmousedown = (event) => {
  touchActive = true;
  x = event.clientX;
  y = event.clientY;
  document.getElementById('info').style.display = 'none';
};

// Adiciona o evento de movimento do toque no canvas
canvas.addEventListener('touchmove', function (event) {
  if (touchActive) {
    // Desenha uma linha até a posição atual do toque
    ctx.beginPath();
    ctx.moveTo(x, y);
    x = event.touches[0].clientX;
    y = event.touches[0].clientY;
    ctx.lineTo(x, y);
    ctx.stroke();
  }
});
canvas.onmousemove = (event) => {
  if (touchActive) {
    // Desenha uma linha até a posição atual do toque
    ctx.beginPath();
    ctx.moveTo(x, y);
    x = event.clientX;
    y = event.clientY;
    ctx.lineTo(x, y);
    ctx.stroke();
  }
};

// Adiciona o evento de término do toque no canvas
canvas.addEventListener('touchend', function (event) {
  touchActive = false;
});
canvas.onmouseup = (event) => {
  touchActive = false;
};
