var Run,manRunning,ground,Ground,obstacle1,obstacle2,obstacle3,Run1,invisibleGround,invisibleMan,Man_jump,jumpingMan;

function preload(){
Run=loadAnimation("images/run1.png","images/run2.png","images/run3.png","images/run4.png","images/run5.png","images/run6.png");
Ground=loadImage("images/ground2.png");

Man_jumping=loadAnimation("images/jump1.png","images/jump2.png","images/jump3.png","images/jump4.png","images/jump5.png","images/jump6.png","images/jump7.png","images/jump8.png");

obstacle1 = loadImage("images/obstacle1.png");
obstacle2 = loadImage("images/obstacle2.png");
obstacle3 = loadImage("images/obstacle3.png");
}

function setup() {
  createCanvas(displayWidth-50,displayHeight-100);
  manRunning=createSprite(displayWidth/2-500,displayHeight/2+50);
  manRunning.addAnimation("running",Run);


  ground=createSprite(displayWidth/2,displayHeight/2+200,displayWidth,10)
  ground.addImage(Ground);
   
  invisibleGround = createSprite(displayWidth/2,displayHeight/2+250,displayWidth,10);
  invisibleGround.visible = false;

 

  ground.velocityX=-20;

  obstaclesGroup = new Group();   

}

function draw() {
  background(255);
  if (ground.x < 0){
    ground.x = ground.width/2;
  }

    
  if(keyDown("space") &&manRunning.y >= 440) {
 
    manRunning.changeAnimation("jumping",Man_jumping);
     
    manRunning.velocityY = -25;
  }
  if(obstaclesGroup.isTouching(manRunning)){
    ground.velocityX=0;
}

 manRunning.velocityY = manRunning.velocityY + 0.8

  ground.depth = manRunning.depth;
  manRunning.depth = manRunning.depth + 1;

  manRunning.collide(invisibleGround);


 console.log();
  drawSprites();
}


function spawnObstacles() {
  if(frameCount % 60 === 0) {
    
    var obstacle = createSprite(displayWidth/2+400,displayHeight/2+200,10,40);
    obstacle.velocityX = -4;
    
    //generate random obstacles
    var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
              break;
      case 2: obstacle.addImage(obstacle2);
              break;
      case 3: obstacle.addImage(obstacle3);
              break;
      default: break;
    }
    
    //assign scale and lifetime to the obstacle           
   
    
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}