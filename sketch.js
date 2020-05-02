var fixedRect, movingRect,fixedRect1, movingRect1;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  fixedRect1 = createSprite(200, 100, 50, 80);
  fixedRect1.shapeColor = "green";
  fixedRect1.debug = true;
  movingRect1 = createSprite(200, 800,80,30);
  movingRect1.shapeColor = "green";
  movingRect1.debug = true;

  movingRect1.velocityY = -5;
  fixedRect1.velocityY = +5;
}

function draw() {
  background(0,0,0);  
  isTouching(fixedRect1,movingRect1);
  

  drawSprites();
}


