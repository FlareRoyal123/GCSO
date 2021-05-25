const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var sun, surajDada;
var wall, wallImg;
var car, tester;
var road, roadImg;
var speed, weight;
var ped1 , tree1;
var ped2 , tree2;

function preload() {
  roadImg = loadImage("road for pro.jpg");

  tester = loadImage("tester.png");

  surajDada = loadImage("sun.png");

  ped1 = loadImage("t2copy.png");

  ped2 = loadImage("tree2.png");
}

function setup() {
  createCanvas(1600, 400);

  speed = random(55, 110);
  weight = random(400, 1500);

  wall = createSprite(1500, 200, 60, height / 2);

  car = createSprite(10, 250, 40, 40);
  car.addImage("gaddi", tester);
  car.scale = 0.25;

  road = createSprite(1000, 600, 10, 10);
  road.addImage("r", roadImg);
  road.scale = 4;

  sun = createSprite(1400, 50, 10, 10);
  sun.addImage("s", surajDada);
  sun.scale = 0.025;

  tree1 = createSprite(1200 , 185 , 10 , 10);
  tree1.addImage("t1",ped1);
  tree1.scale = 0.25;
  
  tree2 = createSprite(500 , 185 , 10 , 10);
  tree2.addImage("t2",ped2);
  tree2.scale = 0.25;
  
  
}

function draw() {
  background("skyblue");

  (wall.shapeColor = 80), 80, 80;

  car.velocityX = speed;

 // car.debug = true;
  //wall.debug = true;

  if (wall.x - car.x < (wall.width + car.width) / 15) {
    car.velocityX = 0;

    var deformation = (0.5 * weight * speed * speed) / 22500;

    if (deformation > 180) {
      wall.shapeColor = color(255, 0, 0);
    }

    if (deformation < 180 && deformation > 100) {
      wall.shapeColor = color(230, 230, 0);
    }

    if (deformation < 100) {
      wall.shapeColor = color(0, 255, 0);
    }
  }

  drawSprites();
}
