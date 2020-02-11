var x = 0;

function setup() {
createCanvas(800,800);

}

function draw() {
background('red');
  ellipse(x ,100,100,100);
  x= (x+10) % width;

}
