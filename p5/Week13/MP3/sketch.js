var cars = [];
var frogPos ;
var state = -1;
var maxCars = 10;
var maxTimer= 20 * 60;
var timer = maxTimer;

var Dino;
var Park;
var Run;
var Music;
var Gamemus;
var Win;
var Happy;
var Loss;
var Lost;
var Nugget;
var World;


function preload(){

    Run = loadFont('assets/run.otf');
    Music= loadSound("assets/music.mp3");
    Gamemus = loadSound("assets/gamemus.mp3");
    Win = loadSound("assets/win.mp3");
    Lost = loadSound("assets/lost.mp3");

}

function setup() {
  // put setup code here
  createCanvas(800,800);
  rectMode(CENTER);
  ellipseMode(CENTER);
  imageMode(CENTER);
  Dino = loadImage("assets/dino.png");
  Park = loadImage("assets/park.jpg");
  Happy = loadImage("assets/happy.png");
  Loss = loadImage("assets/loss.png");
  Nugget = loadImage("assets/nugget.png");
  World = loadImage("assets/world.jpg");



//spawn cars
for (var i = 0; i < maxCars; i++) {
  cars.push(new Car());
}

frogPos = createVector(width/2, height-100);
} //end of function setup

function draw() {
  // put drawing code here
  switch (state) {
    case -1:
    Music.loop();
    state= 0;
    break;

    case 0:
    background('lightblue');
    image(World, width/2, height/2, width, height);

    textSize(50);
    text("FEED THE REXY", 100, 300);
    textSize(50);
    text("click to start", 220, 380);
    textSize(22);
    textFont(Run);
    fill('white');
    text("feed rexy her chicken nuggets before she attacks", 5, 600);

    break;

    case 1:

    //background('lightgreen');
    game();
    timer-- ;
    if(timer <= 0){
      Gamemus.stop();
      Lost.loop();
      state = 3; //they lost
    }


    break;

    case 2:

    background('green');
    textSize(50);
    textFont(Run);
    fill('black');
    text("You calmed the Rexy", 60, 200);
    image(Happy, 400, 500, 400, 400);
    break;

    case 3:
    //Gamemus.stop();
    background('red');
    textSize(50);
    fill('black');
    text("Rexy Got You", 200, 200);
    image(Loss, 400, 500, 400, 400);
    break;
  }
}

function mouseReleased (){
  switch(state){
    case 0:
    Music.stop();
    Gamemus.loop();
    state = 1;
    break;

    case 2: //win state
    resetGame();
    state = 0;
    break;

    case 3: //lost state
    resetGame();
    state = 0;
    break;
  }
}
function resetGame(){
  //reset cars array
  Win.stop();
  Lost.stop();
  Music.loop();
  cars = [];
  for (var i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }

  timer = maxTimer;
}



function game(){
  //background('lightgreen');
image(Park, width/2, height/2, width, height);
  for (var i = 0; i < cars.length; i++){
  cars[i].display();
  cars[i].drive();

if (cars[i].pos.dist(frogPos) < 40) {
  cars.splice(i, 1);
}
}

//if there are no more cars, go to win state
 if(cars.length == 0){
   Gamemus.stop();
  Win.loop();
   state = 2; //they won

 }


//frog

image(Dino, frogPos.x, frogPos.y, 100, 100);
checkForKeys();





}

function checkForKeys(){
  if(keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
  if(keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
  if(keyIsDown(UP_ARROW)) frogPos.y -= 5;
  if(keyIsDown(DOWN_ARROW)) frogPos.y += 5;
}


function Car() {
//attributes
this.pos = createVector(random(width), random(height));
this.vel = createVector(random(-5,5),random(-5,5)) ;
this.r = (138);
this.g = (93);
this.b = (3);

//methods

this.display = function(){
  image(Nugget,this.pos.x,this.pos.y, 90, 90); //chicken nuggets
  fill(this.r, this.g, this.b);
}

this.drive = function(){
  this.pos.add(this.vel);
  if(this.pos.x > width) this.pos.x = 0;
  if(this.pos.x < 0) this.pos.x = width;
  if(this.pos.y > height) this.pos.y = 0;
  if(this.pos.y < 0) this.pos.y = height;
}


} //end of car class
