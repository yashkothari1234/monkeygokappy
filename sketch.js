//Global Variables
var bananaimg,obstaclesgroup,obstacleimg,backImage,player_running,score;
var foodgroup;

function preload(){
  backImage = loadImage("jungle.jpg");
  //missed "" while loading png files
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
   bananaimg = loadImage("Banana.png");
  obstacleimg = loadImage("stone.png"); 
}


function setup() {
  createCanvas(600,300);
  backimg = createSprite(0,0,400,400);
  backimg.addImage("back",backImage);

  backimg.velocityX = -3;
  
   ground  = createSprite(200,280,400,20);
  ground.visible = false;
   player = createSprite(200,270,10,10);
  player.scale = 0.10
  player.addAnimation("play",player_running);
  //no createGroup() in P5, it's new Group()
  foodgroup = new Group();
  
  obstaclesgroup = new Group();
  score = 0;
}


function draw(){
 background(255);
  if(backimg.x<130){
    backimg.x = backimg.width/2;
  }
  if(foodgroup.isTouching(player)){
     foodgroup.destroyEach();
    score = score =score+2;
     }
    
  
  switch(score){
      case 10 : player.scale = 0.12;
      break;
      
            case 20 : player.scale = 0.14;
      break;
      
            case 30 : player.scale = 0.16;
      break;
      
            case 40 : player.scale = 0.18;
      break;
      
      default:break;
      
    }
  
  
  if(obstaclesgroup.isTouching(player)){
     player.scale = 0.10;
  }
  if (keyDown("space")){
    player.velocityY = -3;

  }

      player.velocityY = player.velocityY+0.10;  
  
  player.collide(ground);
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

  food();
  stone();
  
    
  drawSprites();
  stroke ("white");
  textSize(20);
  fill("white");
  text("Score:"+score,390,50);
}

function stone(){
  if(frameCount%300===0){
    var obstacles=createSprite(600,250,10,10);

obstacles.addImage("stone",obstacleimg);
    obstacles.scale = 0.10;
    obstaclesgroup.add(obstacles);
    obstacles.collide(ground);
   // obstacles.debug = true;
    obstacles.velocityX = -3;
    obstacles.lifetime = 120;
    
  }
}



function food(){
  if(frameCount%80===0){
    var food=createSprite(600,150,10,10);
food.addImage("Banana",bananaimg);
    food.scale = 0.05;       
   
    food.velocityX = -3;
    food.lifetime = 120;
    
  }
}




