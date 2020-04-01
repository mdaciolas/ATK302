var cars = [];
var frogPos ;
var state = 0;
var timer = maxTimer;
var maxCars = 10;
var maxTimer= 20 * 60;

function setup() {
  // put setup code here
  createCanvas(800,800);

//spawn cars
for (var i = 0; i < maxCars; i++) {
  cars.push(new Car());
}

frogPos = createVector(width/2, height-100);
} //end of function setup

function draw() {
  // put drawing code here
  switch (state) {

    case 0:
    background('red');
    text("welcome! Click to start!", 200, 200);
    break;

    case 1:
    game();
    timer-- ;
    if(timer <= 0){
      state = 3; //they lost
    }
    break;

    case 2:
    background('green');
    text("You Won!!!", 200, 200);
    break;

    case 3:
    background('blue');
    text("You Lost!!!!", 200, 200);
    break;
  }
}

function mouseReleased (){
  switch(state){
    case 0:
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
  cars = [];
  for (var i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }

  timer = maxTimer;
}



function game(){
  background('lightblue');

  for (var i = 0; i < cars.length; i++){
  cars[i].display();
  cars[i].drive();

if (cars[i].pos.dist(frogPos) < 40) {
  cars.splice(i, 1);
}
}

//if there are no more cars, go to win state
 if(cars.length == 0){
   state = 2; //they won
 }


//frog
fill('white');
ellipse(frogPos.x, frogPos.y, 60, 60);
checkForKeys();

fill('white');
rect(10, 10, timer, 10);

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
this.r = random(255);
this.g = random(255);
this.b = random(255);

//methods

this.display = function(){
  rect(this.pos.x,this.pos.y,100,100);
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
