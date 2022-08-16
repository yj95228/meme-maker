const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const CANVAS_SIZE = 800;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

const colors = [
  "#ff3838",
  "#ffb8b8",
  "#c56cf0",
  "#ff9f1a",
  "#fff200",
  "#32ff7e",
  "#73fff5",
  "#18dcff",
  "#7d5fff",
];

const beginPoint = {
  x: Math.random() * CANVAS_SIZE,
  y: Math.random() * CANVAS_SIZE,
};

ctx.lineWidth = 2;
function onMove({ offsetX, offsetY }) {
  beginPoint.x = offsetX;
  beginPoint.y = offsetY;
}
function onClick() {
  ctx.beginPath();
  ctx.moveTo(400, 400);
  const color = colors[Math.floor(Math.random() * colors.length)];
  ctx.strokeStyle = color;
  ctx.lineTo(beginPoint.x, beginPoint.y);
  ctx.stroke();
}
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("click", onClick);
