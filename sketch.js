var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);

  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);

  wall=createSprite(1200,200,thickness,310);
  wall.shapeColor=color(80,80,80);
  
  bullet=createSprite(50,200,100,40);
  bullet.velocityX=speed;
  bullet.shapeColor=color("white");
}

function draw() {
  background("black");

  if(hasCollided(bullet,wall)){

     bullet.velocityX=0;
     var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
     
    
     if(damage>10){
        wall.shapeColor=color("red");
     }

     if(damage<10){
      wall.shapeColor=color("green");
   }

  }
  drawSprites();
}

