var myState = 0;
var timer = 0;
var x= 2;
var y= 2;
var myFont;
var lemon;


function hamster(){
  fill(255,255, 255);
  ellipse(300,300, 10, 40);
  ellipse(400,300, 10, 40);
  ellipse(350 ,437, 250, 300);

  fill(0,0,0);
  ellipse(300 , 350, 10, 10);
  ellipse(400, 350, 10, 10);
  line(300, 575, 290, 600);
  line(330, 585, 320, 600);
  line(370, 585, 360, 600);
  line(400, 575, 380, 600);

  fill(255, 102, 235);
  triangle(325, 370, 375, 370, 350, 390);
}


function preload(){
  myFont= loadFont('assets/font.ttf')
  lemon= loadFont('assets/lemon.otf')
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
    text("this is the story of", 10, 200);
    text("finding a hamster in my room", 10, 350);
    timer++ ;
    if (timer > 200){
      myState = 1;
      timer = 0;
    }

    break;

    case 1:
    background('blue');
    fill(0,0,0);
    text("based on true events", 140 , 100);

    fill(255,255,255);
    //ears
    ellipse(300,300, 10, 40);
    ellipse(400,300, 10, 40);
    //body
    ellipse(350,437,250,300);

    //legs

    line(300, 575, 290, 600);
    line(330, 585, 320, 600);
    line(370, 585, 360, 600);
    line(400, 575, 380, 600);

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

    timer++;
    if(timer > 200){
      myState= 2
      timer= 0
    }
    break;

    case 2:
    background('green');
    fill(0,0,0);
    textFont(lemon);
    text("He run", 400, 100);
    fill(255,255,255);

push();
translate(x - 100, 0);
    hamster();
pop();

    fill(143, 88, 0);
    rect(0, 600, 1000, 800);
    x = x + 5;

    if (x > width){
      x = 0;
      myState = 3
    }
    break;

    case 3:
    background('black');
    fill(110, 81, 1);
    rect(200 , 0 , 600, 800);

    push();
    translate(0, y-100);
        hamster();
    pop();

    fill(255,255,255);
    text("He ride the elevator", 215, 100);
    fill('red');
    ellipse(100, 500, 30, 30);
    fill('green');
    ellipse(100, 450, 30, 30);
    y = y + 5;
    if (y > height){
      y = 0;
      myState = 4
    }
    break;

    case 4:
    background('orange');
    fill(0,0,0);
    text("He hide in trash", 100, 100);
    text("but he can't escape", 100, 200);

//ears
        fill(255,255,255);
        ellipse(350,300, 10, 40);
        ellipse(450,300, 10, 40);
//body
    fill(255,255,255);
    ellipse(400, 437, 250, 300);

//eyes
    fill(0,0,0);
    ellipse(350, 350, 10, 10);
    ellipse(450, 350, 10, 10);

//mouth
    fill(255, 102, 235);
    triangle(375, 370, 425, 370, 395, 390);

//garbage
    fill(46, 44, 46);
    square(215, 500, 420);
    fill(0,0,0);
    ellipse(425, 500, 500, 50);

  timer++;
  if(timer >200){
    myState= 0
    timer= 0
  }


    break;

  }
}

function mouseReleased() {
  myState = myState + 1;
  if(myState > 4){
    myState = 0;
  }
}
