class Frogger {
    constructor(){
        this.spriteWidth = 250;
        this.spriteHeight = 250;
        this.width = this.spriteWidth/5;
        this.height = this.spriteHeight/5;
        this.x = canvas.width/2 - this.width/2;
        this.y = canvas.height - this.height -40;
        this.moving = false;
        this.frameX = 0;
        this.frameY = 0;
    }
    update(){
        if(keys[38]){
            if(this.moving === false){
                this.y =this.y -grid;
                this.moving = true;
            }
        }
    }
    draw() {
        ctx3.fillStyle = 'green';
        ctx3.fillRect(this.x, this.y, this.width, this.height);
    }

    jump() {
        if(keys[37]){
            console.log('esqueda');
        }else if(keys[38]){
            console.log('pra cima');
        }else if(keys[39]) {
            console.log('direita');
        }else if(keys[40]){
            console.log('pra baixo')
        }
    }
}

const frogger = new Frogger();
console.log(frogger)