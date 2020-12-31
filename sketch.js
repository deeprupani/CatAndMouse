var garden, gardenImage;
var Mouse, MouseImage, MouseImage2, MouseImage3;
var Cat, CatImage, CatImage2, CatImage3;


function preload() {
    //load the images here

    gardenImage = loadImage("images/garden.png");
    MouseImage = loadImage("images/jerryOne.png");
    MouseImage2 = loadAnimation("images/jerryTwo.png");
    MouseImage3 = loadAnimation("images/jerryFour.png")
    CatImage = loadImage("images/tomOne.png");
    CatImage2 = loadAnimation("images/tomTwo.png");
    CatImage3 = loadAnimation("images/tomFour.png");
}

function setup() {


    createCanvas(1000, 600);
    //create tom and jerry sprites here
    garden = createSprite(450, 400, 100, 100);
    garden.addImage(gardenImage);

    Mouse = createSprite(100, 500, 10, 10);
    Mouse.addImage(MouseImage);
    Mouse.scale = 0.1;

    Cat = createSprite(700, 500, 10, 10);
    Cat.addImage(CatImage);
    Cat.scale = 0.1
}

function draw() {


    background(0);
    //Write condition here to evalute if tom and jerry collide
    if (Cat.x - Mouse.x < (Cat.width - Mouse.width) / 2 + 70) {

        Cat.velocityX = 0;
        Cat.addAnimation("CatLastImage", CatImage3);
        Cat.changeAnimation("CatLastImage");

        Mouse.addAnimation("MouseLastImage", MouseImage3);
        Mouse.changeAnimation("MouseLastImage");
    }
    drawSprites();
}


function keyPressed() {

    //For moving and changing animation write code here
    if (keyCode === LEFT_ARROW) {
        Cat.velocityX = -5;
        Cat.addAnimation("catRunning", CatImage2);
        Cat.changeAnimation("catRunning");

        Mouse.addAnimation("mouseTeasing", MouseImage2);
        Mouse.changeAnimation("mouseTeasing");

        // text(Cat.MouseX + ',' + Cat.MouseY, 10, 45);
    }

}
