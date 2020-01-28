function setup() {
  // put setup code here
  createCanvas(800,800);
}

function draw() {
  // put drawing code here
background(3, 211, 252);
fill(28, 252, 3)
rect(1,677,800,150);

  if (mouseIsPressed) {
  fill(89,62,240);
  ellipse(349,403,250,340);
  fill(0,0,0);
  arc(335,389,150,50,50, PI + QUARTER_PI, CHORD);
  line(279,307,309,328);
  line(374,327,407,301);
  line(313,567,313,677);
  line(385,568,385,677);
  line(385,677,405,665);
  line(313,677,290,660);

} else {
  fill(212, 4, 11);
rect(220,246,250,340);
line(277,587,228,677);
line(228,677,211,664);
line(386,587,436,677);
line(436,677,460,665);
fill(0,0,0);
arc(286, 387, 100, 50, 50, PI + QUARTER_PI, CHORD);

fill(245, 219, 24);
triangle(220,436,219,378,100,354);
fill(245, 219, 24)
triangle(470,377,470,436,594,365);

}


fill(0,0,0);
ellipse(289,335,10,10);
ellipse(389,335,10,10);

}



function mouseReleased() {
  console.log(mouseX + "," + mouseY) ;
}
