var myState = 0;

function setup() {
  // put setup code here
  createCanvas(800, 800);
}

function draw() {
  // put drawing code here

  switch(myState){
    case 0:
    background('red');
    text("Beg. of story", 100, 100);
    break;

    case 1:
    background('blue');
    text("1st part", 100, 100);
    break;

    case 2:
    background('green');
    break;

    case 3:
    background('yellow');
    break;

    case 4:
    background('orange');
    break;

  }

}



function mouseReleased() {
  myState = myState + 1;
  if(myState > 4){
    myState = 0;
  }
}
