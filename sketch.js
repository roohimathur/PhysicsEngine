const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myengine,world , myobject,ground,ball;
function setup() {

  createCanvas(400,400);
  
  myengine = Engine.create();
  world = myengine.world;
var myobject_option = {
  isStatic :true,
  restitution:1
}
var ground_option = {
  isStatic :true
}
var ball_option = {
  isStatic :false,
  restitution:1
}
  myobject = Bodies.rectangle(200,100,50,50,myobject_option);
  ground = Bodies.rectangle(200,390,200,20,ground_option);
  ball = Bodies.circle(200,200,20,ball_option) ;
  World.add(world,myobject);
  World.add(world,ground);
  World.add(world,ball);
  //console.log(myo(bject);
  console.log(myobject.position.x);
  
}

function draw() {

  background("black"); 
  Engine.update(myengine);
  rectMode(CENTER);
  rect(myobject.position.x,myobject.position.y,50,50);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  
  
}