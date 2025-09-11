const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = 800);
const CANVAS_HEIGHT = (canvas.height = 700);
let gameSpeed = 5;

const backgroundLayer1 = new Image();
backgroundLayer1.src = "../assets/images/background/layer-1.png";
const backgroundLayer2 = new Image();
backgroundLayer2.src = "../assets/images/background/layer-2.png";
const backgroundLayer3 = new Image();
backgroundLayer3.src = "../assets/images/background/layer-3.png";
const backgroundLayer4 = new Image();
backgroundLayer4.src = "../assets/images/background/layer-4.png";
const backgroundLayer5 = new Image();
backgroundLayer5.src = "../assets/images/background/layer-5.png";

let x = 0;
let x2 = 2400;

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.drawImage(backgroundLayer4, x, 0);
  ctx.drawImage(backgroundLayer4, x2, 0);
  if (x < -2400) x = 2400 - gameSpeed;
  else x -= gameSpeed;
  if (x2 < -2400) x2 = 2400 - gameSpeed;
  else x2 -= gameSpeed;
  requestAnimationFrame(animate);
}
animate();
