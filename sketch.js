var cat, catImage;

var mouse, mouseImage, mouseTaunt;

var garden, gardenImage;

function preload() {
    //load the images here
    gardenImage = loadImage("images/garden.png");
    catImage = loadImage("images/cat4.png");
    mouseImage = loadImage("images/mouse2.png");
    mouseTaunt = loadImage("images/mouse3.png");


}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden = createSprite(500,400,1000,800);
    garden.addImage("images/garden",gardenImage);

    cat = createSprite(850,600,50,59);
    cat.addImage("images/cat4.png",catImage);
    cat.scale = 0.2;

    mouse = createSprite(250,600,50,59);
    mouse.addImage("images/mouse2.png",mouseImage);
    mouse.scale = 0.2;

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


