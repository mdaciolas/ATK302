var grookey;
var moira;
var rick;

function setup() {
  // put setup code here
 createCanvas(800,800);

  grookey = loadImage("assets/grookey.jpg");
  moira = loadImage("assets/moira.jpg");
  rick = loadImage("assets/rickandmorty.jpg");


}

function draw() {
  // put drawing code here
  image(grookey, 0, 0, 200, 200);
  image(moira, 0, 200, 200, 200);
  image(rick, 0, 400, 200, 200);


}
