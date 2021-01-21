function bounceOff(rect1, rect2){
  // comdition for touching an object
    if(rect1.x - rect2.x <= rect2.width/2 + rect1.width/2
      && rect2.x - rect1.x <= rect2.width/2 + rect1.width/2
       && rect1.y - rect2.y <= rect2.height/2 + rect1.height/2
       && rect2.y - rect1.y <= rect2.height/2 + rect1.height/2){
      
        // condition for reflecting back of surfaces
       rect2.velocityX = -1* rect2.velocityX;
        rect2.velocityY = -1* rect2.velocityY;
          
        rect1.shapeColor = rect2.shapeColor;

        ed1.shapeColor = rect2.shapeColor;
       ed2.shapeColor = rect2.shapeColor;
       
      ed3.shapeColor = rect2.shapeColor;     
      return true 
        
    }
  }
  