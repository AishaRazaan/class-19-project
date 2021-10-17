var rocket ,rocketImg
var space , spaceImg
var star , fireBall , starImg, fireBallImg
var starsGroup , fireBallsGroup 
var gameState = "PLAY"
var bgImg
var score = 0
function preload(){
 rocketImg = loadImage("rocket.png");
 spaceImg = loadImage("space.jpg");
 starImg = loadImage("star.png");
fireBallImg = loadImage("fireballs.png");
bgImg = loadImage("SPAce.png");
}

function setup() {
 createCanvas(600,600);
 space = createSprite(300,300);
 space.addImage("background",spaceImg);
 space.velocityY = 1;
 space.scale = 3.5;

 rocket = createSprite(300,300)
 rocket.addImage("fly",rocketImg);
 rocket.scale = 0.3;
 rocket.setCollider("rectangle",0,0,200,450)
 
 starsGroup = createGroup();
 fireBallsGroup  = createGroup();
}

function draw() {
 background(bgImg);
 if(gameState == "PLAY") {
 if(space.y > 400){
    space.y = 350
  }

  if(keyDown(LEFT_ARROW)){
    rocket.x = rocket.x - 3
  }
  if(keyDown(RIGHT_ARROW)){
    rocket.x = rocket.x + 3
  }

  if(rocket.isTouching(starsGroup)){
    score = score + 2 
    starsGroup.destroyEach();
}

  if(rocket.isTouching(fireBallsGroup)){
    space.velocityY = 0
    rocket.destroy();
    gameState = "END"
  }
  spawnStars();
  spawnFireballs();
  drawSprites();
  textSize(20);
  text("score:"+score,20,20)
}
  if(gameState == "END"){
      fill("white")
      textSize(48)
      text("GaMe OvEr",200,100);
  }
    
}

function spawnStars() {
    //write code here to spawn the clouds
    if (frameCount % 200 === 0) {
      var star = createSprite(550,0,40,10);
      star.x = Math.round(random(50,550));
      star.addImage(starImg);
      star.scale = 0.2;
      star.velocityY = 1;
      
       //assign lifetime to the variable
      star.lifetime = 600;
      
      //adjust the depth
     
      rocket.depth = star.depth + 1;
      
      //add each cloud to the group
      starsGroup.add(star);
    }
  }

  function spawnFireballs() {
    //write code here to spawn the clouds
    if (frameCount % 300 === 0) {
      var fireBall = createSprite(300,0,40,10);
      fireBall.x = Math.round(random(50,550));
      fireBall.addImage(fireBallImg);
      fireBall.scale = 0.2;
      fireBall.velocityY = 1;
      
       //assign lifetime to the variable
       fireBall.lifetime = 600;
      
      //adjust the depth
      
      rocket.depth = fireBall.depth + 1;
      
      //add each cloud to the group
      fireBallsGroup.add(fireBall);
    }
  }