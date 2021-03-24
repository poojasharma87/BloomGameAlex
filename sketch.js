
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var lives=3;
//var wallgroup=new Group();

function preload()
{
	bj=loadImage("Untitled (1).png");
	player=loadImage("Dart_Monkey_BTD1.PNG.png");
	enemy=loadImage("bloon (1).png")
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	
	//Creating the Player and it's movement
	Player=createSprite(2,320);
	Player.addImage(player);
	Player.scale=0.2;

	
    
	Engine.run(engine);


	
}


function draw() {
  rectMode(CENTER);
  background(bj);
  Walls();
  if (keyDown(UP_ARROW)) {
		
	Player.y=Player.y-10;

}

	if (keyDown(LEFT_ARROW)) {
	
	Player.x=Player.x-10;

}

	if (keyDown(RIGHT_ARROW)) {
	
	Player.x=Player.x+10;

}

	if (keyDown(DOWN_ARROW)) {
	
	Player.y=Player.y+10;

}

	if(lives===0){

	background.visible =false;
	//Player.visible =false;
	text("Game Over!");
}
	if (Player.x===412 && Player.y===10) {
	
	text("You Won!",380,350);

}
if(Player.isTouching(wallgroup)){

	lives=lives-1;

}
console.log(lives);
	drawSprites();	

}
