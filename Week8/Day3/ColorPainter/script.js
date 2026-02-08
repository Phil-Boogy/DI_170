const canvas = document.getElementById('container');
const sidebar = document.getElementById('sidebar');
const button = document.querySelector('button');


function pixelator() {
    for (let i = 0; i < 10000; i++) {
        const newPix = document.createElement("div");
        newPix.classList.add("pixel");
        canvas.appendChild(newPix)
    }
}

sidebar.addEventListener('click', colorPicker);
let currentColor = ''
function colorPicker(e) {
    if (e.target.tagName === 'DIV') {
        currentColor = e.target.style.backgroundColor
        console.log(currentColor)
    }
}

let isPainting = false
canvas.addEventListener('mousedown', primeToPaint);
canvas.addEventListener('mouseup', stopPainting);
canvas.addEventListener('mousemove', paint);

function primeToPaint() {
    isPainting = true;
}
function paint(e) {
    if (isPainting && e.target.classList.contains('pixel')) {
        e.target.style.backgroundColor = currentColor;
    }
}

function stopPainting() {
    isPainting = false;
}

button.addEventListener('click', clearCanvas);
function clearCanvas() {
    const allPixels = document.querySelectorAll('div.pixel');
    allPixels.forEach(pixel => {
        pixel.style.backgroundColor = 'white';
    });
}

onload = pixelator()