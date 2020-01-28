function setup() {
  // put setup code here
  createCanvas(800,800);
}

function draw() {
  // put drawing code here
background(3, 211, 252);
fill(28, 252, 3);
rect(1,677,800,150);
fill(255,255,255);

ellipse(548,190,150,50);
ellipse(625,169,150,50);
ellipse(631,204,150,50);
ellipse(720,184,150,50);

  if (mouseIsPressed) {
  background(9, 49, 158);
  fill(240,10,36);
  ellipse(349,403,250,340);
  fill(0,0,0);
  arc(335,389,150,50,50, PI + QUARTER_PI, CHORD);
  line(279,307,309,328);
  line(374,327,407,301);
  line(313,567,313,677);
  line(385,568,385,677);
  line(385,677,405,665);
  line(313,677,290,660);


  fill(113, 106, 117);
  ellipse(548,190,150,50);
  ellipse(625,169,150,50);
  ellipse(631,204,150,50);
  ellipse(720,184,150,50);

fill(31, 69, 22);
rect(1,677,800,150);


} else {
  fill(152, 10, 240);
rect(220,246,250,340);
line(277,587,228,677);
line(228,677,211,664);
line(386,587,436,677);
line(436,677,460,665);
fill(0,0,0);
arc(286, 387, 100, 50, 50, PI + QUARTER_PI, CHORD);

fill(139, 10, 245);
triangle(220,436,219,378,100,354);
fill(139, 10, 245);
triangle(470,377,470,436,594,365);

fill(222, 212, 20);
ellipse(23,78,200,200);
}


fill(0,0,0);
ellipse(289,335,10,10);
ellipse(389,335,10,10);

}



function mouseReleased() {
  console.log(mouseX + "," + mouseY) ;
}
