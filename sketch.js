var obstacle_img,obstacleGroup,back_ground,score,stone,banana,stone_img, background_img,banana_img, monkey_imgrun;

function preload(){
  stone_img=loadImage("stone.png")
  background_img= loadImage("jungle.jpg")
  banana_img= loadImage("banana.png")
  monkey_imgrun=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")
  
}

function setup() {
  createCanvas(400, 400);
  back_ground=createSprite(380,200,30,30)
  back_ground.addImage("background1",background_img)
  back_ground.velocityX=-6
  
  
  monkey=createSprite(30,390,10,10)
  monkey.addAnimation("monkey",monkey_imgrun)
  monkey.scale=0.3
  
  ground=createSprite(200,280,10,400)
ground.visible=false
ground.velocityX=-5



foodGroup=new Group()
obstacleGroup= new Group()
  
  
}



function draw() {
  if (back_ground.x<0){
    back_ground.x=300
  }
  
  if (ground.x<0){
    ground.x=300
  }
  
  if (foodGroup.isTouching(monkey)){
    score=score+2
    foodGroup.destroyEach()
  }
  
  switch(score){
    case 10: monkey.scale=0.12;
      break
    case 20: monkey.scale=0.14;
      break  
    case 30: monkey.scale=0.16;
      break
   case 40: monkey.scale=0.18;
      break 
  }      
if (obstacleGroup.isTouching(monkey)){
  monkey.scale=0.1
}      
      stroke("white")
      textSize(20)
      fill("white")
      text("Score: "+score,380,20)
  
  monkey.collide(ground)
  spawnFood()
  drawSprites()
}


function spawnFood(){
  if(frameCount% 60==0){
    var banana= createSprite(450,250,10,10)
    banana.addImage("banana image ", banana_img)
    banana.velocityX=-4
    banana.y= Math.round(random(10,250))
    banana.lifetime=155
    banana.scale=0.05
    foodGroup.add(banana)
    
    }
}
  
function spawnObstacles(){
  if(frameCount% 50==0){
   var stone= createSprite(450,280,10,10)
    stone.addImage("stone image ", stone_img)
    stone.velocityX=-6
    stone.lifetime=155
    obstacleGroup.add(stone)
    }
}  