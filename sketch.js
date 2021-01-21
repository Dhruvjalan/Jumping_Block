var canvas, mblock, base1, base2, base3, base4, backgroundload, backgroundsp, ed1,ed2,ed3,ed4; 
// base1 = blue; base2 = green; base3 = red; base4 = orange;
var music;

function preload(){
    music = loadSound("music.mp3");
    backgroundload = loadImage("background.jpg");
}


function setup(){
    canvas = createCanvas(700,600);
   backgroundsp = createSprite(350,300,700,600);

    backgroundsp.addImage(backgroundload);
    backgroundsp.scale = 1.2;
    mblock = createSprite(280,300,30,30);
    mblock.velocityY = 12;
    mblock.velocityX = 17;
    base1 = createSprite(610,590,170,10);
    base1.shapeColor = "blue";
    base2 = createSprite(440,590,150,10);
    base2.shapeColor = "green";

    base3 = createSprite(280,590,150,10);
    base3.shapeColor = "red";

    base4 = createSprite(101,590,188,10);
    base4.shapeColor = "orange";
        //createEdges()

    ed1 = createSprite(350,20,700,2);
    ed1.visible = false;
    ed2 = createSprite(1,300,2,600);
    ed2.visible = false;
    ed3 = createSprite(699,300,2,600);
    ed3.visible = false;
     
    music.play(true);



    

}

function draw() {
    background("white");
    
  if(bounceOff(mblock,ed1)){
      mblock.velocityY = -1* mblock.velocityY
      
  }

    if(bounceOff(mblock,ed2)){
        mblock.velocityX = -1* mblock.velocityX;
       

    };
   if(bounceOff(mblock,ed3)){
       mblock.velocityX = -1 *mblock.velocityX;
      
   }




   if(bounceOff(mblock,base1)||bounceOff(mblock,base2) || bounceOff(mblock,base3)||bounceOff(mblock,base4)){
    mblock.velocityX = random(-17,17); 
    mblock.velocityY = -1* mblock.velocityY; 
    if(bounceOff(mblock,base2)){
        mblock.velocityX = 0;
        mblock.velocityY = 0;
        music.setVolume = 0;
        music.stop();

        if(keyWentDown("space")|| keyWentDown(UP_ARROW)){
            mblock.velocityY = -20;
            mblock.velocityX = random(-5,5);
            music.play();
        }
    }

}

 
    
    
       
    

  drawSprites();
    //add condition to check if box touching surface and make it box
}
