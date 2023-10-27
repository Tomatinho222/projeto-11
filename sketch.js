var navio,navioImg
var oceano,oceanoImg




function preload(){
navioImg=loadImage('ship-1.png',"ship-2.png","ship-3.png","ship-4.png")
oceanoImg=loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  oceano=createSprite(400,200)
  oceano.addImage(oceanoImg)
  oceano.velocityX=-5
  oceano.scale=0.3

  navio=createSprite(130,200,30,30)
  navio.addImage("barquinho",navioImg)
  navio.scale=0.25
}

function draw() {
  background("blue");
  if(oceano.x<0){
    oceano.x=oceano.width/8
  }
    drawSprites();

 
}
