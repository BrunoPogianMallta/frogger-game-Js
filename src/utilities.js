
    function animate() {
        traffic.play();
        ctx3.clearRect(0, 0, canvas.width, canvas.height);
        ctx2.drawImage(background,0, 0, canvas.width, canvas.height);
        handleParticles();
        frogger.draw();
        frogger.update();
        handleObstacles();
        handleScoreBoard();
        ctx4.drawImage(grass,0, 0, canvas.width, canvas.height);
        frame++;
        requestAnimationFrame(animate); 
    }
       
if(gameStart){
    animate();
}


//event listners
window.addEventListener('keydown',function(e){
    keys = [];
    keys[e.keyCode]= true;
    if(keys[37] || keys[38] || keys[39] || keys[40]) {
        frogger.jump();
    }
})

window.addEventListener('keyup',function(e){
    delete keys[e.keyCode];
    frogger.moving = false;
    frogger.frameX =0;
})

function scored() {
    score++;
    touchDown.play();
    gameSpeed += 0.05;
    frogger.x = canvas.width/2 - frogger.width/2;
    frogger.y = canvas.height - frogger.height -40;
}

function handleScoreBoard(){
    ctx4.fillStyle = 'black';
    ctx4.strokeStyle = 'black';
    ctx4.font = '25px Arial';
    ctx4.fillText('Pontos',430,17)
    ctx4.font = '60px Arial';
    ctx4.fillText(score,500,69);
    ctx4.font ='20px Verdana';
    ctx4.fillText('Vidas: ' + colisions, 10,70);
    ctx4.fillText('Velocidade : ' + gameSpeed.toFixed(1), 10, 50);
   
}

//detect collisions
function collision(first, second){
    return !(first.x > second.x + second.width ||
          first.x + first.width < second.x ||
          first.y > second.y + second.height ||
          first.y + first.height < second.y);
}

//reset Game
function resetGame(){
    frogger.x = canvas.width/2 - frogger.width/2;
    frogger.y = canvas.height - frogger.height -40;
    score = 0;
    colisions--;
    gameSpeed = 1;
    if(colisions <= 0){
        gameStart = false;
        traffic.pause();
        ctx4.fillStyle = 'white';
        ctx4.fillText('GAME OVER',220,250);
        ctx4.font ='200px Verdana';
        if(!gameStart){
            window.location.href = "./gameOver.html";
        }    
    }
    
    
    

}