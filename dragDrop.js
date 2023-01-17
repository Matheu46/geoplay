const drops = document.querySelectorAll('.dropzone');
const forma = document.querySelector('.forma');

let el;

forma.addEventListener('dragstart', dragstart);
forma.addEventListener('drag', drag);
forma.addEventListener('dragend', dragend);

forma.addEventListener('touchstart', touchstart);
forma.addEventListener('touchmove', touchmove);

function dragstart() {
  this.classList.add('sumir');
}
function touchstart(event) {
  el = event.target;
}

function drag() {}
function touchmove(event) {
  el.style.position = 'absolute';
  el.style.left = event.touches[0].clientX - el.clientWidth / 2;
  el.style.top = event.touches[0].clientY - el.clientHeight / 2;
  event.preventDefault();

  // el.style.transform = 'translate(' + x + 'px,' + y + 'px)';
}

function dragend() {
  this.classList.remove('sumir');
}

drops.forEach((dropzone) => {
  dropzone.addEventListener('dragenter', dragenter);
  dropzone.addEventListener('dragover', dragover);
  dropzone.addEventListener('dragleave', dragleave);
  dropzone.addEventListener('dragdrop', dragdrop);
});

function dragenter() {}

function dragover() {
  console.log('em cima');
  this.classList.add('em-cima');
  if (this.className.includes(forma.classList[1])) {
    forma.classList.add('desaparecer');
  }
}

function dragleave() {
  this.classList.remove('em-cima');
}

function dragdrop() {}
