var tom,tomWalk,tomI
var jerry,jerryBully,jerryI
var bg

function preload() {
    //load the images here
    tomWalk = loadAnimation("images/cat2.png","images/cat3.png")
    jerryBully = loadAnimation("images/mouse1.png","images/mouse2.png","images/mouse3.png")
    tom = loadImage("images/cat4.png")
    jerry = loadImage("images/mouse4.png")
    bg = loadImage("images/garden.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(1000,700,10,10)
    tom.scale = 1
    bg = createSprite(0,0)
    bg.scale = 1
    //jerry = createSprite(1000,700)
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide


    text("ma'am i cant understand how to do this project")
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === 37){
      tom.setAnimation(tomWalk)
      jerry.setAnimation(jerryBully)
  }


}
