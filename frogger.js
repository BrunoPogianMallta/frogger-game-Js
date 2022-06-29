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
        //frog jump up
        if(keys[38]){
            if(!this.moving){
                this.y =this.y -grid;
                this.moving = true;
                console.log(this.y);
            }
        }
        //frog jump down
        if(keys[40]){
               if(!this.moving && this.y < canvas.height - this.height *2 ){
                this.y += grid;
                this.moving = true;
               }
               console.log(this.y);
        }
        //frog jump to the left
        if(keys[37]){
            if(!this.moving && this.x > this.width){
             this.x -= grid;
             this.moving = true;
             console.log(this.x)
            }
        }

        if(keys[39]){
            if(!this.moving && this.x < canvas.width - this.width * 2){
            this.x += grid;
            this.moving = true;
            console.log(this.x)
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
