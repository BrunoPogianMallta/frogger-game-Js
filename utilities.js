function animate() {
    ctx3.clearRect(0, 0, canvas.width, canvas.height);
    frogger.draw();
    // frogger.update();
    requestAnimationFrame(animate);
}

animate();

//event listners
window.addEventListener('keydown',function(e){
    keys = [];
    keys[e.KeyCode]= true;
    if(keys[37] || keys[38] || keys[39] || keys[40]) {
        frogger.jump();
    }
})