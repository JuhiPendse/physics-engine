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
  ground = new Ground(700,700,500,20)

  car1=new Car(600,535,200,200)
  car2=new Car(500,535,200,200)
  car3=new Car(400,535,200,200)
  car4=new Car(550,480,200,200)
  car5=new Car(450,480,200,200)
  car6=new Car(500,420,200,200)
  slingshot = new SlingShot(bomb.body,{x:400, y:400});
  bomb=new Bomb(400,400,50,50)

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
  sligshot.display()
  bomb.display()
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
