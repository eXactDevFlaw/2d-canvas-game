export default class Enemy {
  constructor() {
      // this.speed = Math.random() * 4 - 2;
      this.spriteWidth = 80;
      this.spriteHeight = 80;
      this.width = this.spriteWidth * 2;
      this.height = this.spriteHeight * 2;
      this.x = Math.random() * (700 - this.width);
      this.y = Math.random() * (800 - this.height);
    this.frame = 0
    this.movementSpeed = Math.floor(Math.random() * 12 + 2);
  }

  update(gameFrame) {
    this.x += Math.random() * 5 - 2.5;
    this.y += Math.random() * 5 - 2.5;

    if(gameFrame % this.movementSpeed === 0){
        this.frame > 3 ? this.frame = 0 : this.frame++
    }
  }

  draw(ctx, enemyImage1) {
    ctx.drawImage(
      enemyImage1,
      this.frame * this.spriteWidth,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}
