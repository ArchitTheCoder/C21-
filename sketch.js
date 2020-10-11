var fixedRect, movingRect;

var go1, go2, go3, go4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = false;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = false;

  go1 = createSprite(100,100,50,50);
  go1.shapeColor = "yellow"
  go2 = createSprite(200,100,50,50);
  go2.shapeColor = "yellow"
  go3 = createSprite(300,100,50,50);
  go3.shapeColor = "yellow"
  go4 = createSprite(400,100,50,50);
  go4.shapeColor = "yellow"
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;


  
  if (isTouching(movingRect, go3)) {
    movingRect.shapeColor = "red";
    go3.shapeColor = "red";
  
  } else {
    
    movingRect.shapeColor = "green";
    go3.shapeColor = "yellow";
  }
  if (isTouching(movingRect, go2)) {
    movingRect.shapeColor = "red";
    go2.shapeColor = "red";
  
  } else {
    
    movingRect.shapeColor = "green";
    go2.shapeColor = "yellow";
  }

  

  drawSprites();
}

function isTouching(a,b) {
  if (a.x - b.x < b.width/2 + a.width/2
    && b.x - a.x < b.width/2 + a.width/2
    && a.y - b.y < b.height/2 + a.height/2
    && b.y - a.y < b.height/2 + a.height/2) {
      return true;
} else {
  return false;
}

}
