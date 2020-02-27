var myState = 0;
var timer = 0;
var x= 2;
var y= 2;
var myFont;


function preload(){
  myFont= loadFont('assets/font.ttf')
}

function setup() {
  // put setup code here
  createCanvas(1000, 800);
}

function draw() {
  // put drawing code here

  switch(myState){
    case 0:
    background('red');
    fill(0,0,0);
    textSize(50);
    textFont(myFont);
    text("this is the story of", 10, 100);
    text("finding a hamster in my room", 10, 150);
    timer++ ;
    if (timer > 200){
      myState = 1;
      timer = 0;
    }

    break;

    case 1:
    background('blue');
    fill(0,0,0);
    text("based on true events", 10, 100);

    fill(255,255,255);
    //ears
    ellipse(300,300, 10, 40);
    ellipse(400,300, 10, 40);
    //body
    ellipse(350,437,250,300);

    //eyes
    fill(0,0,0);
    ellipse(300, 350, 10, 10);
    ellipse(400, 350, 10, 10);

    //mouth
    fill(255, 102, 235);
    triangle(325, 370, 375, 370, 350, 390);

    //floor
    fill(143, 88, 0);
    rect(0, 600, 1000, 800);
    break;

    case 2:
    background('green');
    fill(0,0,0);
    text("He run", 100, 100);
    fill(255,255,255);
    ellipse(x ,437, 250, 300);

    //fill(0,0,0);
    hamster(x , 350, 10, 10);
  //  ellipse(x, 350, 10, 10);
    //fill(255, 102, 235);
    //triangle(325, 370, 375, 370, 350, 390);

    fill(143, 88, 0);
    rect(0, 600, 1000, 800);
    x = x + 5;

    if (x > width){
      x = 0;
    }
    break;

    case 3:
    background('black');
    fill(110, 81, 1);
    rect(200 , 0 , 600, 800);
    fill(255,255,255);
    ellipse(500, y, 250, 300);
    //fill(0,0,0);
    //ellipse(500, 350, 10, 10);
    //ellipse(600, 350, 10, 10);
    fill(255,255,255);
    text("He ride the elevator", 100, 100);
    y = y + 5;
    if (y > height){
      y=0;
    }


    break;

    case 4:
    background('orange');
    fill(0,0,0);
    text("He hid in trash", 100, 100);
    text("but he can't escape", 100, 200);

    fill(255,255,255);
    ellipse(400, 437, 250, 300);

    fill(0,0,0);
    ellipse(350, 350, 10, 10);
    ellipse(450, 350, 10, 10);

    fill(255, 102, 235);
    triangle(375, 370, 425, 370, 395, 390);

    fill(46, 44, 46);
    square(215, 500, 420);
    fill(0,0,0);
    ellipse(425, 500, 500, 50);
    break;

  }
}

function hamster(){
  fill(0,0,0);
  ellipse(300 , 350, 10, 10);
  ellipse(400, 350, 10, 10);
  fill(255, 102, 235);
  triangle(325, 370, 375, 370, 350, 390);
}


function mouseReleased() {
  myState = myState + 1;
  if(myState > 4){
    myState = 0;
  }
}
