const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball;

function setup() {
  createCanvas(400,400);

  //creating physics engine
  engine = Engine.create();
  //creating world using physics engine
  world = engine.world;

  var ground_options = {
    isStatic : true
  }
  ground = Bodies.rectangle(200,390,200,20,ground_options);
  World.add(world,ground);

  var ball_options = {
    restitution : 1

  }
  ball = Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);
  //console.log(object);
  //console.log(object.position.x);
  //console.log(object.position.y);
}

function draw() {
  background(140,220,175);

  Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);


  drawSprites();
}