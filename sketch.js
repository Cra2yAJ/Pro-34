//Create variables here

var dog, happyDog, database, foodS, foodStock;
var dogImage, dog2Image;

function preload()
{
  //load images here
  dogImage = loadImage("images/dogimg.png");
  dog2Image = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  dog = createSprite(displayWidth/2,displayHeight/2,10,10);
  dog.addImage(dogImage);
  database = firebase.database();
  console.log(database);
  foodStock = database.ref('food');
  foodStock.on("value",readStock); 
  
}


function draw() {  

  background(46, 139, 87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dog2Image);
  }
  drawSprites();
  //add styles here

}

function readStock(data){
  foodS= data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }

  database.ref('/').update({
    food:x
  })
}


