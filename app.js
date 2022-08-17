const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const CANVAS_SIZE = 800;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.lineWidth = 2;

let isPainting = false;
function onMove({ offsetX, offsetY }) {
  if (isPainting) {
    ctx.lineTo(offsetX, offsetY);
    ctx.stroke();
    return;
  }
  ctx.moveTo(offsetX, offsetY);
}
function startPainting() {
  isPainting = true;
}
function cancelPainting() {
  isPainting = false;
}
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);
