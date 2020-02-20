
var mic;
var vol;
var y = 0 ;

function setup() {
  createCanvas(800, 800);

  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background('red');

push();
translate(y,0);
  fill(152, 10, 240);
rect(220,246,250,340);
line(277,587,228,677);
line(228,677,211,664);
line(386,587,436,677);
line(436,677,460,665);
fill(0,0,0);
arc(286, 387, 100, 50, 50, PI + QUARTER_PI, CHORD);

fill(0,0,0);
ellipse(289,335,10,10);
ellipse(389,335,10,10);

stroke(0,0,0);
fill(139, 10, 245);
triangle(220,436,219,378,100,354);
fill(139, 10, 245);
triangle(470,377,470,436,594,365);
pop();


  vol = mic.getLevel(); // level is between 0 and 1
  vol = vol * 100; // you may need to change this

  if (vol > 3) {
    // do something
    y++ ;

  }


  textSize(18);
  text("Click the screen first.  My volume is " + vol, 80, 400);


}


// you need to click the screen before the mic input will work.
function touchStarted() {
  getAudioContext().resume();
}
