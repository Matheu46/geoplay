document.addEventListener('DOMContentLoaded', () => {
  const pincel = {
    ativo: false,
    movendo: false,
    pos: { x: 0, y: 0 },
    posAnterior: null,
  };

  const canvas = document.querySelector('#canvas');
  const ctx = canvas.getContext('2d');

  // canvas.width = 700;
  // canvas.height = 500;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const desenhar = (linha) => {
    ctx.beginPath();
    ctx.moveTo(linha.posAnterior.x, linha.posAnterior.y);
    ctx.lineTo(linha.pos.x, linha.pos.y);
    ctx.stroke();
  };

  canvas.onmousedown = (event) => {
    pincel.ativo = true;
    document.getElementById('info').style.display = 'none';
  };
  canvas.addEventListener('touchstart', function (event) {
    pincel.ativo = true;
    document.getElementById('info').style.display = 'none';
  });

  canvas.onmouseup = (event) => {
    pincel.ativo = false;
  };
  canvas.addEventListener('touchend', function (event) {
    pincel.ativo = false;
  });

  canvas.onmousemove = (event) => {
    pincel.pos.x = event.clientX;
    pincel.pos.y = event.clientY;
    pincel.movendo = true;
  };
  canvas.addEventListener('touchmove', function (event) {
    pincel.pos.x = event.touches[0].clientX;
    pincel.pos.y = event.touches[0].clientY;
    pincel.movendo = true;
  });

  const ciclo = () => {
    if (pincel.ativo && pincel.movendo && pincel.posAnterior) {
      desenhar({ pos: pincel.pos, posAnterior: pincel.posAnterior });
      pincel.movendo = false;
    }
    pincel.posAnterior = { x: pincel.pos.x, y: pincel.pos.y };

    setTimeout(ciclo, 10);
  };

  ciclo();
});
