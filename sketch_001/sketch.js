function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
	var inverseX = width-mouseX;
  var inverseY = height-mouseY;

  fill(100,125,175);
  rect(mouseX, mouseY, mouseY/2+10, mouseY/2+10);

  fill(237,34,93);
  rect(inverseX, inverseY, (inverseY/4)+10, (inverseY/4)+10);
}
