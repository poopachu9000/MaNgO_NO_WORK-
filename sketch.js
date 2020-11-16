
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy, tree;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var stone;
var Handsy;

var lmango,lstone;

function preload()
{
boy = loadImage("boy.png");
tree = loadImage("tree.png");

}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	mango1=new mango(1100,100,30);
	 mango2=new mango(1170,130,30);
	  mango3=new mango(1010,140,30);
	   mango4=new mango(1000,70,30);
		mango5=new mango(1100,70,30);
		 mango6=new mango(1000,230,30);
		  mango7=new mango(900,230,40);
		   mango8=new mango(1140,150,40);
			mango9=new mango(1100,230,40);
			 mango10=new mango(1200,200,40);
			  mango11=new mango(1120,50,40);
			   mango12=new mango(900,160,40);

	stone=new Stone(1,2,40);

	Handsy = new Hand(stone.body,{x:240,y:450});







	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  imageMode(CENTER);
	image(boy,280,500,200,200);
	
	image(tree,1000,300,700,700);
  
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango9.display();
	mango10.display();
	mango11.display();
	mango12.display();
	stone.display();

	detectCollision(stone,mango1);
	detectCollision(stone,mango2);
	detectCollision(stone,mango3);
	detectCollision(stone,mango4);
	detectCollision(stone,mango5);
	detectCollision(stone,mango6);
	detectCollision(stone,mango7);
	detectCollision(stone,mango8);
	detectCollision(stone,mango9);
	detectCollision(stone,mango10);
	detectCollision(stone,mango11);
	detectCollision(stone,mango12);

  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){
	Handsy.fli();
}


function detectCollision(lstone,lmango){
	mangoBodyPositon=lmango.body.position;
	stoneBodyPosition=lstone.body.position;
	var distance= dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPositon.x,mangoBodyPositon.y);
	
	if(distance<=lmango.r+lstone.r){

Matter.Body.setStatic(lmango.body,false);

	}
	
}


function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:235,y:420});
		Handsy.attach(stone.body);
	}
}



