var fr,mr

function setup() {
  createCanvas(800,400);
  fr=createSprite(200,200,80,50)
  fr.shapeColor="red"
  mr=createSprite(800,400,80,50)
  mr.shapeColor="red"
  
}

function draw() {
  background("black");  
  
  mr.x=World.mouseX
  mr.y=World.mouseY

  if(mr.x-fr.x<fr.width/2 + mr.width/2 && fr.x-mr.x<mr.width/2 + fr.width/2 && mr.y-fr.y<fr.height/2 + mr.height/2 && fr.y-mr.y<mr.height/2 + fr.height/2){
    fr.shapeColor="blue"
    mr.shapeColor="blue"
  }
  else{
    fr.shapeColor="red"
    mr.shapeColor="red"
  }
  drawSprites();
}