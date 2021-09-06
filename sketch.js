var bg,sleep,brush,gym,eat,drink,move;
var astronaut;



function preload(){

  bg = loadImage("Astronaut's daily routine/iss.png");
  sleep = loadAnimation("Astronaut's daily routine/sleep.png");
  brush = loadAnimation("Astronaut's daily routine/brush.png");
  gym = loadAnimation("Astronaut's daily routine/gym1.png","Astronaut's daily routine/gym2.png");
  eat = loadAnimation("Astronaut's daily routine/eat1.png","Astronaut's daily routine/eat2.png");
  bath = loadAnimation("Astronaut's daily routine/bath1.png","Astronaut's daily routine/bath1.png","Astronaut's daily routine/bath1.png","Astronaut's daily routine/bath2.png","Astronaut's daily routine/bath2.png");
  move = loadAnimation("Astronaut's daily routine/move.png","Astronaut's daily routine/move.png","Astronaut's daily routine/move1.png","Astronaut's daily routine/move1.png");

}

function setup() {
  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale=0.1;

  
  createCanvas(600,600);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(bg); 

  textSize(17);

  fill("white");

  text("Instructions:",50,50);

  text("Up Arrow = Brushing",50,70);

  text("Down Arrow = Gymming",50,90);

  text("Left Arrow = Eating",50,110);

  text("Right Arrow = Bathing",50,130);

  text("m Key = Moving",50,150);

 var edges = createEdgeSprites();

 astronaut.bounceOff(edges);

  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("Brushing",brush);
    astronaut.changeAnimation("Brushing");
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }

  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("Gymming",gym);
    astronaut.changeAnimation("Gymming");
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }

  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("Eating",eat);
    astronaut.changeAnimation("Eating");
    astronaut.y=350;
    astronaut.velocityX=5;
    astronaut.velocityY=5;
  }

  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("Bathing",bath);
    astronaut.changeAnimation("Bathing");
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }

  if(keyDown("m")){
    astronaut.addAnimation("Moving",move);
    astronaut.changeAnimation("Moving");
    astronaut.y=350;
    astronaut.velocityX=3;
    astronaut.velocityY=3;
  }

  drawSprites();
}