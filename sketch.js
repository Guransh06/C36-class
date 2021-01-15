var canvas, backgroundImage;
var gameState=0,playerCount,database,form,player,game;


function preload(){
  backgroundImage=loadImage("images/startbg.png");
}
function setup(){
  canvas = createCanvas(400,400);
database=firebase.database();
game=new Game();
game.getState();
game.start();
}


function draw(){
  background(backgroundImage);
}
