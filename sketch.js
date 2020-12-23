var bullet,wall,l;
var thickness,speed,weight;

function setup() {
createCanvas(1600,400);


speed=random(223,321)
weight=random(30,52)
thickness=random(22,83)
  
    bullet=createSprite(50, 200, 50,5);  
    bullet.velocityX = speed;
    bullet.shapeColor=color(255);

 
  	
    
    wall=createSprite(900, 200, thickness, height/2);  

    wall.shapeColor=color(230,230,230);
}


function draw() {
  background("black");  

  if(hascollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5 * weight * speed * speed/(thickness*thickness*thickness);

    if(damage>10)
    {
     
      wall.shapeColor=color("red");
    }
    if(damage>10 )
    {
      
      wall.shapeColor=color("green");
    }
    
  }

  drawSprites();
}

function hascollided(bullet,wall)
{

bulletRightEdge=bullet.x+bullet.width;
wallLeftEdge=wall.x;
if(bulletRightEdge>=wallLeftEdge)
{
return true;
}
return false;
}


