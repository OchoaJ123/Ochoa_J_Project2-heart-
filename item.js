let enterCount = 0;
let clicks = 0;
let message = "press on enter 3 times";
let x;
let y;
let r, g, b;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER, CENTER);
  textSize(25); 
}

function draw() {
  background("#ffbaba");
  
  r = random(255);
  g = random(255);
  b = random(255);
  
  x = 250;
  y = 250;
  
  noStroke();
  
  //head
  fill("#a70000")
  circle(x-100,y-30, 190);
  circle(x+50,y-30, 190);
  triangle (x-155, y+47, x-25, y+150, x+145, y+35);
  
  fill("#ff5252");
  circle(175,y-30, 190);
  circle(325,y-30, 190);
  triangle (x-145, y+35, x, y+150, x+145, y+35);
  
  //eyes
  fill('white')
  circle(200,250,75)
  
  fill('white')
  circle(300,250,75)
  
  //inner eyes
  fill("#a70000")
  circle(200,250,50)
  
  fill("#a70000")
  circle(300,250,50)
  
  fill('white')
  circle(200,245,20)
  
  fill('white')
  circle(300,245,20)
  
  //smile
  fill("#a70000")
  ellipse(250,y+25,20,30)
  
  //text
  fill('#a70000');
  text(message, width / 2, 425);
  
  //function myHeart
  myHeart();
}

function keyPressed() {
  // Check if the Enter key is pressed
  if (key === 'Enter') {
    enterCount++;
    clicks++;
  }
  // Update the message when Enter key is pressed three times
  if (enterCount === 3) {
    message = "Happy Valentine's Day!";
  }
}

function myHeart(){
  if (clicks >= 1){
    fill("#a70000");
    circle(x-151, 75, 20);
    circle(x-135, 75, 20);
    triangle(x-160, y-170, x-140, y-150, x-120, y-172);
    fill("#ff5252");
    circle(x-145, y-175, 20);
    circle(x-130, y-175, 20);
    triangle(x-154, y-170, x-135, y-150, x-120, y-172);
  }
  if(clicks >= 2){
    fill("#a70000");
    circle(x+155, 75, 20);
    circle(x+136, 75, 20);
    triangle(x+162, y-170, x+147, y-150, x+126, y-171);
    fill("#ff5252");
    circle(x+160, y-175, 20);
    circle(x+143, y-175, 20);
    triangle(x+169, y-170, x+152, y-150, x+133, y-172);
  }
  if (clicks >= 3){
    fill(r,g,b);
    circle(200,245, 20);
    fill(r,g,b);
    circle(300,245, 20); 
  }
}