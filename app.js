const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

// 집
ctx.fillRect(100, 200, 50, 200);
ctx.fillRect(300, 200, 50, 200);
ctx.lineWidth = 2;
ctx.fillRect(200, 300, 50, 100);
ctx.fillRect(100, 200, 200, 20);
ctx.moveTo(100, 200);
ctx.lineTo(225, 100);
ctx.lineTo(350, 200);
ctx.fill();

// 사람
ctx.beginPath();
ctx.fillRect(470, 250, 15, 100);
ctx.fillRect(610, 250, 15, 100);
ctx.fillRect(520, 250, 60, 100);
ctx.arc(550, 180, 50, 0, 2 * Math.PI);
ctx.fill();

// 눈
ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(570, 160, 10, Math.PI, 0);
ctx.arc(530, 160, 10, Math.PI, 0);
ctx.fill();
ctx.beginPath();
ctx.arc(570, 180, 5, 0, 2 * Math.PI);
ctx.arc(530, 180, 5, 0, 2 * Math.PI);
ctx.fill();
