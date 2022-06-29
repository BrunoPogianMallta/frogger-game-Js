class Frogger {
    constructor(){
        this.spriteWidth = 250;
        this.spriteHeigth = 250;
        this.width = this.spriteWidth/5;
        this.heigth =this.spriteHeigth/5;
        this.x = canvas.width/2 - this.width/2;
        this.y = canvas.heigth - this.heigth -40;
        this.moving = false;
        this.frameX = 0;
        this.frameY = 0;
    }
    update(){
        console.log('update')
    }
    draw() {
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x, this.y, this.width, this.heigth);

    }
}
const frogger = new Frogger();