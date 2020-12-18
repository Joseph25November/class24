const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig;
var log;
var bird;
var box3;



function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,375,50,50);
    box2 = new Box(850,375,50,50);
    ground = new Ground(600,height,1200,20);
    pig = new Pig (775, 375);
    log = new Log (775, 340, 250, PI/2)
    bird = new Bird (50, 120)
    box3 = new Box (700,305,50,50)
    box4 = new Box (850,305,50,50)
    pig2 = new Pig (775,305,50,50)
    log2 = new Log (775,295,250, PI/2)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig.display();
    log.display();
    bird.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
}