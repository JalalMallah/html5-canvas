const canvas = document.getElementById('draw');
const ctx = canvas.getContext('2d');

ctx.strokeStyle = '#222';
ctx.lineCap = 'round';
ctx.lineJoin = 'round';
ctx.lineWidth = 5;

let lastX = 0;
let lastY = 0;

let isDrawing = false;

function draw(e) {
  if (!isDrawing) return;

  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
}

canvas.addEventListener('mousedown', e => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => (isDrawing = false));
canvas.addEventListener('mouseout', () => (isDrawing = false));

// Controls

// Line Color

function changeStrokeColor(e) {
  if (e.target.classList.contains('black')) {
    ctx.strokeStyle = '#000';
  }
  if (e.target.classList.contains('light-blue')) {
    ctx.strokeStyle = '#1E90FF';
  }
  if (e.target.classList.contains('red')) {
    ctx.strokeStyle = '#ce1010';
  }
  if (e.target.classList.contains('green')) {
    ctx.strokeStyle = '#228b22';
  }
  if (e.target.classList.contains('indigo')) {
    ctx.strokeStyle = '#4b0082';
  }
}

const colorControls = document.querySelectorAll('.color');
colorControls.forEach(color => {
  color.addEventListener('click', changeStrokeColor);
});

// Line Thickness
const lineWidthControls = document.querySelectorAll('.thickness');

function changeLineWidth(e) {
  if (e.target.classList.contains('thin')) {
    ctx.lineWidth = 5;
  }
  if (e.target.classList.contains('medium')) {
    ctx.lineWidth = 25;
  }
  if (e.target.classList.contains('thick')) {
    ctx.lineWidth = 50;
  }
}

lineWidthControls.forEach(controlItem =>
  controlItem.addEventListener('click', changeLineWidth)
);

// Clear Canvas Button
const clearBtn = document.querySelector('.clear');

clearBtn.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
