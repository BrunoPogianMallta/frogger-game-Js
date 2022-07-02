const canvas = document.getElementById('canvas1');
const ctx1 = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 600;

const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas.getContext('2d');
canvas2.width = 600;
canvas2.height = 600;

const canvas3 = document.getElementById('canvas3');
const ctx3 = canvas.getContext('2d');
canvas3.width = 600;
canvas3.height = 600;

const canvas4 = document.getElementById('canvas4');
const ctx4 = canvas.getContext('2d');
canvas4.width = 600;
canvas4.height = 600;

const canvas5 = document.getElementById('canvas5');
const ctx5 = canvas.getContext('2d');
canvas5.width = 600;
canvas5.height = 600;

//global variables
const grid = 80;
let keys = [];
let score = 0;
let colisions = 3;
let frame = 0;
let gameSpeed = 1;
let gameStart = true;
let onTheLog = false;

const particlesArray = [];
const maxParticles = 300;
const ripplesArray = [];
const carsArray = [];
const logsArray = [];
let highScore =0;




//images and sounds

const waterSound = new Audio();
waterSound.src = './sounds/water-sound.mp3';

const background = new Image();
background.src ='../src/assets/general/river_bank2.png'

const grass = new Image();
// grass.src = './assets/grama.png';

const collisionCar = new Image();
collisionCar.src ='./assets/efects/dead-efect.png';

const turtle = new Image();
turtle.src =  './assets/obstacles/turtles.png';

const log = new Image();
log.src = './assets/obstacles/log2.png';

const car = new Image();
car.src = './assets/cars/cars2.png';
let numberOfCars =4;

const froggerSprite = new Image();
froggerSprite.src ='./assets/frogger/sapo-verde.png';

const touchDown = new Audio();
touchDown.src = './sounds/touch-down.mp3';

const traffic = new Audio();
traffic.src = './sounds/traffic.mp3';
if (typeof traffic.loop == 'boolean')
{
    traffic.loop = true;
}
else
{
    traffic.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
}

