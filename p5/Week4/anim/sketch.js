var x = 0 ;

function setup() {
  // put setup code here
  createCanvas(800,800);
}

function draw() {
  // put drawing code here
  background('blue');

  push();
  translate(x, 0);
  fish()
  pop();

  x = x + 1;
  if (x > width) {
    x = -500

  }
}

function fish(){
  fill(152, 10, 240);
rect(220,246,250,340);
line(277,587,228,677);
line(228,677,211,664);
line(386,587,436,677);
line(436,677,460,665);

stroke(0,0,0);
fill(139, 10, 245);
triangle(220,436,219,378,100,354);
fill(139, 10, 245);
triangle(470,377,470,436,594,365);



}
