const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var score = 0;
var block1,block3,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15;
var block2,block4,block16,block17,block18,block19,block20,block21,block22,block23,block24,block25;
var bg = 'sprite/back1.png';
var backgroundImg;

function preload(){
    getBg();
}

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground();
  stand1 = new Stand(380,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  block1 = new Block1(300,275,30,40);
  block2 = new Block1(330,275,30,40);
  block3 = new Block1(360,275,30,40);
  block4 = new Block1(390,275,30,40);
  block5 = new Block1(420,275,30,40);
  block6 = new Block1(450,275,30,40);
  block7 = new Block1(480,275,30,40);

  block8 = new Block4(330,235,30,40);
  block9 = new Block4(360,235,30,40);
  block10 = new Block4(390,235,30,40);
  block11 = new Block4(420,235,30,40);
  block12 = new Block4(450,235,30,40);
  
  block13 = new Block2(360,195,30,40);
  block14 = new Block2(390,195,30,40);
  block15 = new Block2(420,195,30,40);

  block16 = new Block3(390,155,30,40);

  blocks1 = new Block1(640,175,30,40);
  blocks2 = new Block1(670,175,30,40);
  blocks3 = new Block1(700,175,30,40);
  blocks4 = new Block1(730,175,30,40);
  blocks5 = new Block1(760,175,30,40);
  
  blocks6 = new Block2(670,135,30,40);
  blocks7 = new Block2(700,135,30,40);
  blocks8 = new Block2(730,135,30,40);

  blocks9 = new Block4(700,95,30,40);

  ball = new polygon(50,200,40,40);

  slingShot = new Slingshot(ball.body,{x:100,y:200});

}
function draw() {
  if(backgroundImg)
  background(backgroundImg); 

  Engine.update(engine);
  
  drawSprites();
 
  strokeWeight(2);
  stroke(0);  
  textSize(18);
  fill(255,145,255);
  textFont("Lucida Calligraphy");
  text("Press Space to get a second chance to play!!",450,330);

  textSize(22)
  text("Drag the polygon to destroy the blocks",200,30);  

  strokeWeight(2);
  stroke(15);
  textSize(22);
  fill(40,242,46);
  textFont("Lucida Calligraphy");
  text("SCORE : "+ score,750,30);

  

  ground.display();
  stand1.display();
  stand2.display();

  strokeWeight(2);
  stroke(15);
  
  fill("skyblue");

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  fill("pink");

  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  fill("turquoise");

  block13.display();
  block14.display();
  block15.display();

  fill("grey");

  block16.display();

  fill("skyblue");

  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();

  fill("turquoise");

  blocks6.display();
  blocks7.display();
  blocks8.display();

  fill("pink")

  blocks9.display();

  slingShot.display();

  ball.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();

  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();

  block13.score();
  block14.score();
  block15.score();

  block16.score();

  blocks1.score();
  blocks2.score();
  blocks3.score();
  blocks4.score();
  blocks5.score();

  blocks6.score();
  blocks7.score();
  blocks8.score();

  blocks9.score();

  

  getBg();
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
    if(keyCode === 32){
      Matter.Body.setPosition(ball.body,{x:50,y:200});
        slingShot.attach(ball.body);
    }
}

async function getBg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/asia/kolkata");
  var responseJson = await response.json();
  var date = responseJson.datetime;
  var hour = date.slice(11,13);
  if(hour >= 06 && hour <= 18){
      bg = "sprite/back2.png";
  }
  else{
      bg = "sprite/back1.png";
  }
    backgroundImg = loadImage(bg);
}