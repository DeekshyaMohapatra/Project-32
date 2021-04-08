const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var girlpic,stonepic,manpic,basketpic;
var land,tree,flower1,flower2,flower3,flower4,flower5,flower6,flower7,flower8;
var stone,string;
var treepic;

function preload()
{
girlpic=loadImage("boatgirl_alpha.png");
stonepic=loadImage("stone.PNG");
manpic=loadImage("man.PNG")
basketpic=loadImage("basket.PNG");
treepic=loadImage("tree.PNG");
}


function setup() {
  createCanvas(1200,500);

  engine=Engine.create();
  world = engine.world;
  land=new Ground(650,480,1300,40);
  //tree=new Tree(200,260,400,450);
  
  flower1=new flower(290,100,25);
  flower2=new flower(180,60,30);
  flower3=new flower(220,120,30);
  flower4=new flower(100,100,23);
  flower5=new flower(250,180,27);
  flower6=new flower(120,160,30);
  flower7=new flower(150,110,30);
  flower8=new flower(330,210,25);
  flower9=new flower(230,50,28);

  stone=new Stone(450,100,30);
  string=new String(stone.body,{x:800,y:240});
 
  Engine.run(engine);
}

function draw() {
  //Engine.update(engine);
  background("lightblue");  
  fill("black")
  textSize(24);
  text("Drag the stone and hit the flowers",500,100);
  text("press space to get a second stone",400,150);
  land.display();
  image(manpic,930,315,400,400);
  image(stonepic,1100,430,200,250)
  image(girlpic,1080,370,230,230);
  image(basketpic,920,320,100,100);
  image(treepic,200,240,400,450);

  //tree.display();
  string.display();
  stone.display();
  
  flower1.display();
  flower2.display();
  flower3.display();
  flower4.display();
  flower5.display();
  flower6.display();
  flower7.display();
  flower8.display();
  flower9.display();
 
  detectCollision(stone,flower1);
  detectCollision(stone,flower2);
  detectCollision(stone,flower3);
  detectCollision(stone,flower4);
  detectCollision(stone,flower5);
  detectCollision(stone,flower6);
  detectCollision(stone,flower7);
  detectCollision(stone,flower8);
  detectCollision(stone,flower9);
  
  
}

function mouseDragged()
{
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased()
{
	string.fly();
}

function detectCollision(lstone,lflower)
{
  flowerBodyPosition = lflower.body.position;
  stoneBodyPosition = lstone.body.position;

  var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,flowerBodyPosition.x,flowerBodyPosition.y);
  if(distance <= lstone.r + lflower.r)
  {
	  Matter.Body.setPosition(lflower.body,{x:930,y:330});
  }
} 

function keyPressed()
{
	if(keyCode === 32)
	{
		Matter.Body.setPosition(stone.body,{x : 230,y : 390});
		string.attach(stone.body);
	}
}