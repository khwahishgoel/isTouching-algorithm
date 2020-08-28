var  rect1, rect2;
function setup() {
  createCanvas(800,400);
  rect1=createSprite(400, 200, 50, 50);
  rect2=createSprite(200,150,50,50);

}

function draw() {
  background(255,255,255); 
  rect1.x=mouseX;
  rect1.y=mouseY;
  if(isTouching(rect1,rect2)) {
    rect1.shapeColor="black";
    rect2.shapeColor="black";
    }else{
      rect2.shapeColor="blue";
      rect1.shapeColor="blue";

    }
    
  drawSprites();
}
function isTouching(object1,object2){
  if(object1.x-object2.x<=object1.width/2+object2.width/2
    &&object2.x-object1.x<=object1.width/2+object2.width/2
    &&object1.y-object2.y<=object1.height/2+object2.height/2
    &&object2.y-object1.y<=object1.height/2+object2.height/2){
      return true;
      
    }
    else {
      return false;
    }
}
