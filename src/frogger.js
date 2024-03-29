class Frogger {
    constructor(){
        this.spriteWidth = 250;
        this.spriteHeight = 250;
        this.width = this.spriteWidth/5;
        this.height = this.spriteHeight/5;
        this.x = canvas.width/2 - this.width/2;
        this.y = canvas.height - this.height -40;
        this.score = 0;
        this.moving = false;
        this.frameX = 0;
        this.frameY = 0;
    }
    handleTouchStart(event) {
        keys = [];
        this.touchStartX = event.touches[0].clientX;
        this.touchStartY = event.touches[0].clientY;
        this.jump(); // Chama o método jump diretamente
    }

    handleTouchEnd(event) {
        if (this.touchStartX === undefined || this.touchStartY === undefined) {
            return;
        }

        const touchEndX = event.changedTouches[0].clientX;
        const touchEndY = event.changedTouches[0].clientY;

        const deltaX = touchEndX - this.touchStartX;
        const deltaY = touchEndY - this.touchStartY;

        // Verificar se o movimento é horizontal ou vertical
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            // Movimento horizontal
            keys[39] = false; // Desativa a tecla da direita
            keys[37] = false; // Desativa a tecla da esquerda
        } else {
            // Movimento vertical
            keys[40] = false; // Desativa a tecla para baixo
            keys[38] = false; // Desativa a tecla para cima
        }

        this.touchStartX = undefined;
        this.touchStartY = undefined;
    }
    update(){
        //frog jump up
        if(keys[38]){
            if(!this.moving){
                this.y =this.y -grid;
                this.moving = true;
                this.frameX = 1;
                this.frameY = 0;
                console.log(this.y);
            }
        }
        //frog jump down
        if(keys[40]){
               if(!this.moving && this.y < canvas.height - this.height *2 ){
                this.y += grid;
                this.moving = true;
                this.frameY = 3;
               }
               console.log(this.y);
        }
        //frog jump to the left
        if(keys[37]){
            if(!this.moving && this.x > this.width){
             this.x -= grid;
             this.moving = true;
             this.frameY = 2;
             console.log(this.x)
            }
        }

        if(keys[39]){
            if(!this.moving && this.x < canvas.width - this.width * 2){
            this.x += grid;
            this.moving = true;
            this.frameY = 1;
            console.log(this.x)
            }
        }

        if(this.y < 0)scored();
    }
    draw() {
        // ctx3.fillStyle = 'green';
        // // ctx3.fillRect(this.x, this.y, this.width, this.height);
        ctx3.drawImage(froggerSprite, this.frameX * this.spriteWidth, this.frameY * this.spriteHeight, this.spriteWidth, this.spriteHeight,this.x-25, this.y-25, this.width*2,this.height*2);
    }

    jump() {
        if(!this.moving){
            this.frameX =1;
            this.moveSound();
        }else if(this.frameX === 1){
            this.frameX =0;
        }
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
    moveSound(){
        const ribbit = new Audio();
        ribbit.src = './sounds/sapo-pulando-final.mp3';
        return ribbit.play();
    }
    deadSound(){
        const deadSound = new Audio();
        deadSound.src = './sounds/frogg-dead-sound.mp3';
        return deadSound.play();
    }
}

const frogger = new Frogger();

// Adicionar event listeners para toques
canvas.addEventListener('touchstart', (event) => frogger.handleTouchStart(event));
canvas.addEventListener('touchend', (event) => frogger.handleTouchEnd(event));
