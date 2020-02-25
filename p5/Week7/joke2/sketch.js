var myState = 0;
var timer = 0;


function setup() {
  // put setup code here
  createCanvas(800, 800);
}


function draw() {
  // put drawing code here

  switch(myState){
    case 0:
    background(255, 87, 112);
    textSize(25);
    text("what's the difference between snowmen and snow women?", 100, 100);
    timer++ ;
    if (timer > 200){
      myState = 1;
      timer = 0;
    }
    break;

    case 1:
    background(111, 120, 237);
    textSize(25);
    text("snowballs", 100, 100);
    timer++ ;
    if (timer > 200){
      myState = 0;
      timer = 0;
    }
    break;
  }
}
