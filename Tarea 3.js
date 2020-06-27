var numerot

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  fill(0);
  if(mouseIsPressed){
  numerot = int(random(1,7))
    }else if(numerot == 1){
  ellipse(200,200,80,80)
    }else if(numerot == 2){
  ellipse(300,100,80,80);
  ellipse(100,300,80,80);
    }else if(numerot == 3){
  ellipse(300,100,80,80);
  ellipse(200,200,80,80);
  ellipse(100,300,80,80);
    }else if(numerot == 4){
  ellipse(100,100,80,80);
  ellipse(300,100,80,80);
  ellipse(100,300,80,80);
  ellipse(300,300,80,80);
    }else if(numerot == 5){
  ellipse(100,100,80,80);
  ellipse(300,100,80,80);
  ellipse(200,200,80,80);
  ellipse(100,300,80,80);
  ellipse(300,300,80,80);
    }else if(numerot == 6){
  ellipse(100,100,80,80);
  ellipse(300,100,80,80);
  ellipse(100,200,80,80);
  ellipse(300,200,80,80);
  ellipse(100,300,80,80);
  ellipse(300,300,80,80);
  }
}
