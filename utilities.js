function animate() {
    ctx3.clearRect(0, 0, canvas.width, canvas.height);
    ctx2.drawImage(background,0, 0, canvas.width, canvas.height);
    handleParticles();
    frogger.draw();
    frogger.update();
    handleObstacles();
    ctx4.drawImage(grass,0, 0, canvas.width, canvas.height);
    requestAnimationFrame(animate);
}

animate();

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
})

function scored() {
    score++;
    gameSpeed += 0.05;
    frogger.x = canvas.width/2 - frogger.width/2;
    frogger.y = canvas.height - frogger.height -40;
}