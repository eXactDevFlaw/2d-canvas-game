import Background from "../modules/textures/background/background.js";
import Enemy from "../modules/creatures/enemies/enemie-1.js";
import SpriteLoader from "../modules/utilities/sprite-loader/sprite-loader.js";

const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = 800);
const CANVAS_HEIGHT = (canvas.height = 700);
let gameSpeed = 2;
let gameFrame = 0;
const numberOfEnemies = 50;
const gameEnemies = [];

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

const slider = document.getElementById('slider');
slider.value = gameSpeed;
const showGameSpeed = document.getElementById('show-game-speed');
showGameSpeed.innerHTML = gameSpeed;
slider.addEventListener('change', function(e) {
  gameSpeed = e.target.value;
  showGameSpeed.innerHTML = e.target.value;
})

const layer1 = new Background(backgroundLayer1, 0.2, ctx);
const layer2 = new Background(backgroundLayer2, 0.4, ctx);
const layer3 = new Background(backgroundLayer3, 0.6, ctx);
const layer4 = new Background(backgroundLayer4, 0.8, ctx);
const layer5 = new Background(backgroundLayer5, 1.0, ctx);
const gameBackgrounds = [layer1, layer2, layer3, layer4, layer5]

for (let i  = 0; i < numberOfEnemies; i++){
  gameEnemies.push(new Enemy())
}

const enemyImage1 = new Image();
enemyImage1.src = "../assets/images/enemies/Ghost/Fly.png"


function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  gameBackgrounds.forEach(object => {
    object.update(gameSpeed);
    object.draw(ctx);
  })

  gameEnemies.forEach(object => {
    object.update(gameFrame);
    object.draw(ctx, enemyImage1);
  })

  gameFrame++;
  requestAnimationFrame(animate);
}
animate();