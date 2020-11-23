var mrect,frect;

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
mrect = createSprite(400,200,80,20);
frect = createSprite(400,200,80,20);
}

function draw() {
  mrect.y = World.mouseY;
  mrect.x =World.mouseX;

console.log(mrect.y-frect.y)

if(frect.x-mrect.x<mrect.width/2+frect.width/2
   && mrect.x-frect.x<mrect.width/2+frect.width/2
    && mrect.y-frect.y<mrect.height/2+frect.height/2
    && frect.y-mrect.y<mrect.height/2+frect.height/2){
  mrect.shapeColor = "red";
  frect.shapeColor = "red";
}else{
  mrect.shapeColor = "green";
  frect.shapeColor = "green";
}
 


background(255,255,255);  
  drawSprites();
}