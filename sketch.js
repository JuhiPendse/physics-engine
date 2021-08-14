const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var car 
var bomb
var slingshot
var gameState="unsling"

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(800,700,1600,20)

  car1=new Car(400,600,10,100)
  car2=new Car(500,600,10,100)
  car3=new Car(600,600,10,100)
  car4=new Car(550,500,10,200)
  car5=new Car(450,500,10,200)
  car6=new Car(500,400,10,100)
  bomb=new Bomb(100,400,50,50)
  slingshot = new SlingShot(bomb.body,{x:100, y:400});

}

function draw() {
  background("black"); 
  Engine.update(engine);

  car1.display()
  car2.display()
  car3.display()
  car4.display()
  car5.display()
   car6.display()
  ground.display()
  bomb.display()
  slingshot.display()
  drawSprites();
}


function mouseDragged(){
  if(gameState !== "launch"){
      Matter.Body.setPosition(bomb.body, {x: mouseX , y: mouseY});

  }
}


function mouseReleased(){
  slingshot.fly();
  gameState="launch"
}
