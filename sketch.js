const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var bridge;
var wall1,wall2;
var jointPoint,joint;
var jointlink,jl;


var stones = [];



function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  ground = new Base(20,height/1.03,width * 2,30);
  wall1 = new Base(20,height/1.73,80,480);
  wall2 = new Base(1315,height/1.73,80,480);

  bridge = new Bridge(25,{x:wall1.body.position.x - 30, y: height -520});

  jointPoint = new Base(width - 100, height / 2 - 150, 40, 20);
  joint = new Base(width - 1100, height / 2 - 100, 40, 20);

  Matter.Composite.add(bridge.body, jointPoint);
  jointLink = new link(bridge, jointPoint);

  for (var i = 0; i <= 8; i++) {
    var x = random(width / 2 - 200, width / 2 + 300);
    var y = random(-10, 140);
    var stone = new Stone(x, y,80, 80);
    stones.push(stone);
  }
  
}

function draw() {
  background(0);
  Engine.update(engine);

  

  ground.show();
  wall1.show();
  wall2.show();
  

  bridge.show();

  for(var stone of stones){
    stone.show();
  }
}

