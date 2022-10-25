function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw(){
  background(0,0,0);
  if(mouseY > 250){
  text("BOO!!",420,440)
  textSize(210);
  textStyle(BOLD);
  fill(555);
  }
  if(mouseY > 125){
  text("BOO!!",420,255);
  textSize(210);
  textStyle(BOLD);
  fill(255,165,0);
  }
  if(mouseY > 425){
  text("BOO!!",420,625);
  textSize(210);
  textStyle(BOLD);
  fill(221,160,221)
  }
}