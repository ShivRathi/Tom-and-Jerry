var tom,tomImg,tomImg2,tomImg3;
var garden;
var jerry,jerryImg2,jerryImg3;


function preload() {
    //load the images here
    gardenImage=loadImage("images/garden.png");
    tomImg=loadAnimation("images/cat1.png");
    tomImg2=loadAnimation("images/cat2.png","images/cat3.png");
    tomImg3=loadAnimation("images/cat4.png");
    jerryImg=loadAnimation("images/mouse1.png");
    jerryImg2=loadAnimation("images/mouse2.png","images/mouse3.png");
    jerryImg3=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
   tom=createSprite(650,700,20,20);
   tom.addAnimation("tomImg",tomImg);
 
   tom.scale=0.2;
   jerry=createSprite(100,700,20,20);
   jerry.addAnimation("jerryImg",jerryImg);
   jerry.scale=0.1;
}

function draw() {

    background(gardenImage);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x-jerry.x<(tom.width-jerry.width)/2){
        tom.velocityX=0;
        tom.addAnimation("tomImg3",tomImg3);
        tom.changeAnimation("tomImg3");
        jerry.addAnimation("jerryImg3",jerryImg3);
        jerry.changeAnimation("jerryImg3");
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      tom.velocityX=-5;
      tom.addAnimation("tomImg2",tomImg2);
      tom.changeAnimation("tomImg2");
      jerry.addAnimation("jerryImg2",jerryImg2);
      jerry.changeAnimation("jerryImg2");
  }

}
