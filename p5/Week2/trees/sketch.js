function setup() {
  // put setup code here
   createCanvas(720, 400);
}

function draw() {
  // put drawing code here
  background('#1b72f5');
  noStroke();

  fill('#572121');
  rect(420, 100, 63, 400);

  fill('#02631a');
  rect(001, 350, 720, 100);

   fill('#ebd023');
   ellipse(100, 100, 150, 150);

   fill('#ffffff');
 arc(100, 100, 180, 180, PI, TWO_PI);

   fill('#ffffff');
 arc(200, 100, 180, 180, PI, TWO_PI);

  fill('#0c6b1d');
  arc(450, 150, 180, 180, PI, TWO_PI);

fill(0);
textSize(30);
  text(mouseX + "," + mouseY, 50,50);
}
