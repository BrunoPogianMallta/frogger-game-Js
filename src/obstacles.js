class Obstacle {
    constructor(x, y, width, height, speed, type){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this. type = type;
        this.frameX = 0;
        this.frameY = 0;
        this.randomise = Math.floor(Math.random() *30 + 30);
        this.carType = (Math.floor(Math.random()* numberOfCars));
    }
    draw() {
            if(this.type === 'turtle'){
                if(frame % this.randomise === 0){
                    if(this.frameX >=1)this.frameX = 0;
                    else this.frameX++;
                }
                ctx1.drawImage(turtle, this.frameX * 70,this.frameY * 70, 70, 70, this.x, this.y, this.width, this.height);  

            }else if(this.type === 'log'){
                ctx1.drawImage(log,this.x, this.y, this.width, this.height);
            } else{
                ctx2.drawImage(car, this.frameX * this.width, this.carType * this.height, grid * 2, grid, this.x, this.y, this.width, this.height);
            }
        // ctx1.fillStyle = 'red'
        // ctx1.fillRect(this.x, this.y, this.width, this.height);
    }
    update() {
        this.x += this.speed * gameSpeed;
        if(this.speed > 0){
            if(this.x > canvas.width + this.width){
                this.x = 0 - this.width;
                this.carType = (Math.floor(Math.random()* numberOfCars));
            }
        }else {
            ctx2.fillRect(this.x, this.y, this,this.width, this.height)
            this.frameX = 1;
            if(this.x < 0 - this.width){
                this.x = canvas.width + this.width;
                this.carType = (Math.floor(Math.random()* numberOfCars));
            }
        }
        

    }
}

function initObstacles() {
    //first lane
    for(let i =0; i < 2; i++){
        let x = i * 350;
        carsArray.push(new Obstacle(x, canvas.height - grid * 2 -20, grid * 2, grid, 1,
        'car'));
    }
    //secound lane
    for(let i = 0; i < 2;i++){
        let x = i * 300;
        carsArray.push(new Obstacle(x, canvas.height - grid * 3 -20, grid * 2, grid, -3,
            'car'))
    }
    //third lane
    for(let i = 0; i < 2;i++){
        let x = i * 400;
        carsArray.push(new Obstacle(x, canvas.height - grid * 4 -20, grid * 2, grid, 3,
            'car'))
    }
    //fourth lane
    for(let i = 0; i < 2;i++){
        let x = i * 450;
        logsArray.push(new Obstacle(x, canvas.height - grid * 5 -20, grid * 2, grid, -2,
            'log'))
    }
    //fifith lane
    for(let i = 0; i < 3;i++){
        let x = i * 200;
        logsArray.push(new Obstacle(x, canvas.height - grid * 6 -20, grid, grid, 1,
            'turtle'))
    }
}

initObstacles();

function handleObstacles() {
    for(let i= 0; i< carsArray.length;i++){
        carsArray[i].update();
        carsArray[i].draw();
    }
    for(let i= 0; i< logsArray.length;i++){
        logsArray[i].update();
        logsArray[i].draw();
    }
    //colision cars
    for(let i =0 ; i < carsArray.length;i++){
        if(collision(frogger, carsArray[i])){
        ctx1.drawImage(collisionImg,frogger.x, frogger.y, 50, 50);
        frogger.deadSound();
        resetGame();
       }
    }
    //step on log and turtles
    if(frogger.y < 250 &&  frogger.y >100){
        onTheLog = false;

        for(let i =0; i < logsArray.length; i++){
            if(collision(frogger, logsArray[i])){
            frogger.x +=  logsArray[i].speed
            onTheLog = true;
            }
        }
        if(!onTheLog){
            for(let i =0; i < 30; i++){
                waterSound.play();
                ripplesArray.unshift(new Particles(frogger.x, frogger.y));
            }
            setTimeout(() => {
                resetGame();
            }, 130);
           
        }
    }
}



