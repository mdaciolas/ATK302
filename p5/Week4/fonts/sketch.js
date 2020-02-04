var l ;

function preload() {
  l = loadFont('assets/letters.ttf');  // find an otf or ttf
}

function setup() {
  createCanvas(1000, 800) ;
}
function draw() {
  fill(0,0,0);   // SETS the color
  textFont(l,100);  // SETS the font
  textSize(100);	// SETS the size of the font
  text("HELLO", 100, 100); // DISPLAYS TEXT WITH THE FONT
}
