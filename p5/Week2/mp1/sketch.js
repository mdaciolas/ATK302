function setup() {
  // put setup code here
  createCanvas(1000,800);
}

function draw() {
  // put drawing code here
background(100);

  if (mouseIsPressed) {
  ellipse(50, 50, 50, 50);
} else {
  rect(25, 25, 50, 50);
}

}
