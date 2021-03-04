var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions= [];

var gameState = "start";

var divisionHeight=300;
var score =0;

function setup() {
  createCanvas(800, 700);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

particl = 0;

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
 
  textAlign(CENTER);
  if(particl === 5){
    gameState="end";
  }

  text("500", 50, 525);
  text("500", 125, 525);
  text("500", 200, 525);
  text("200", 285, 525);
  text("200", 360, 525);
  text("200", 445, 525);
  text("200", 520, 525);
  text("100", 595, 525);
  text("100", 670, 525);
  text("100", 745, 525);


   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
 //  if(frameCount%60===0){
  //   particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
  //   score++;
  // }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

  }


function mousePressed(){

  if(gameState === "start"){
  particles.push(new Particle(mouseX, 10,10));
  particl=particl+1;
  }

}