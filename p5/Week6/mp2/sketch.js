var myState = 0;
var timer = 0;
var x= 2;
var y= 2;

function setup() {
  // put setup code here
  createCanvas(800, 800);
}

function draw() {
  // put drawing code here

  switch(myState){
    case 0:
    background('red');
    fill(0,0,0);
    textSize(25);
    text("this is the story of", 10, 100);
    text("finding a hamster in my room", 10, 130);
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
    ellipse(350,437,250,300);
    break;

    case 2:
    background('green');
    fill(0,0,0);
    text("He run", 100, 100);
    fill(255,255,255);
    ellipse(x ,437, 250, 300);
    x = x + 5;

    if (x > width){
      x = 0;
    }
    break;

    case 3:
    background('yellow');
    fill(0,0,0);
    text("He ride the elevator", 100, 100);
    fill(255,255,255);
    ellipse(400, y, 250, 300);
    y = y + 5;
    if (y > height){
      y=0;
    }


    break;

    case 4:
    background('orange');
    fill(0,0,0);
    text("He scare", 100, 100);
    fill(255,255,255);
    ellipse(400, 437, 250, 300);
    break;

  }

}



function mouseReleased() {
  myState = myState + 1;
  if(myState > 4){
    myState = 0;
  }
}
