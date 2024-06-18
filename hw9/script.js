document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('drawingCanvas');
    const context = canvas.getContext('2d');
    const brushColorInput = document.getElementById('brushColor');
    const brushSizeInput = document.getElementById('brushSize');
    const clearCanvasButton = document.getElementById('clearCanvas');

    canvas.width = window.innerWidth * 0.9;
    canvas.height = window.innerHeight * 0.8;

    let painting = false;

    function startPosition(e) {
        painting = true;
        draw(e);
    }

    function endPosition() {
        painting = false;
        context.beginPath();
    }

    function draw(e) {
        if (!painting) return;
        
        context.lineWidth = brushSizeInput.value;
        context.lineCap = 'round';
        context.strokeStyle = brushColorInput.value;

        context.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        context.stroke();
        context.beginPath();
        context.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    }

    function clearCanvas() {
        context.clearRect(0, 0, canvas.width, canvas.height);
    }

    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', endPosition);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseleave', endPosition);
    clearCanvasButton.addEventListener('click', clearCanvas);
});
