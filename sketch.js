var rectangle;
var rectangle2;








function setup() {
  createCanvas(400,400);
  rectangle=createSprite(100, 200, 100, 50);
  rectangle.shapeColor="red";
  rectangle2=createSprite(200,200,100,50);
rectangle2.shapeColor="red";
}

function draw() {
  background("lightblue");  

  rectangle2.x=World.mouseX;
  rectangle2.y=World.mouseY;
  if( rectangle2.x-rectangle.x<rectangle2.width/2+rectangle.width/2
    &&rectangle.x-rectangle2.x<rectangle2.width/2+rectangle.width/2
    &&rectangle2.y-rectangle.y<rectangle2.height/2+rectangle.height/2
    &&rectangle.y-rectangle2.y<rectangle2.height/2+rectangle.height/2)
    {
rectangle.shapeColor="yellow";
rectangle2.shapeColor="blue";

  }
  else
  {
    rectangle.shapeColor="red";
    rectangle2.shapeColor="red";
    

  }

  
  
  drawSprites();
}