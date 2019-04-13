let balls = [];
let direction=1;
let defaultColor = [255, 0, 255, 127];
let numOfBalls = 30;
let slider;

function setup() {
  createElement('h2', 'Mouse interaction: click the balls in canvas!');
  createCanvas(800, 500);
   
  for (let i = 0; i< numOfBalls; i++){
  balls[i] = new Ball(width/2, height/2, 50, defaultColor);
  }
 // createP('');
  createP('Control the size of balls!!');
  slider = createSlider(0, 100, 0);
  //slider.position(10, height+20);
  slider.size(500);
  //slider.changed(changeSize);
  
  createP('Add more balls!');
  button = createButton('Add');
  button.size(100);
  button.mousePressed(addBalls);
}

function mouseClicked(){
    for (let b of balls){
      b.clicked(mouseX, mouseY);
    }
  // for (let i=0; i<balls.length; i++){
  //   balls[i].clicked(mouseX, mouseY)
  // }
}

// function changeSize(){
//   for (let b of balls){
//     b.r = slider.value();
//   }
  
// }

function addBalls(){
  let newBall = new Ball(random(0, width), random(0, height), 50, defaultColor)
  newBall.rgbt = [255, 255, 255, 255]
  balls.push(newBall);
  
}

function keyPressed(){
  if (keyCode == LEFT_ARROW) {
    console.log("clicked!");

    balls[balls.length-1].rgbt = [255, 255, 255, 255];
    balls.pop();
    

  } else if (keyCode == RIGHT_ARROW) {
    newBall = new Ball(width/2, height/2, 50, [255, 255, 255, 255]);
    balls.push(newBall);
    console.log("clicked!");

  }
}




function draw() {
  background(0);
  
  for (let b of balls) {
    b.move();
    b.show();
    b.recoverColor();
    
    // moving sizes
    if (b.r > 50 + slider.value()){
       scaler = random(0, 1)
       direction = -2*scaler
    }else if(b.r <= 30+ slider.value()){
       scaler = random(0, 1)
       direction = 2*scaler
    }
    b.r+=1*direction
    //changeSize();
    //let val = slider.value()
    //b.changeRGBT([slider.value(), 0, 255, 127]);
    
    // mouse over
    // if (b.mouseOver(mouseX, mouseY)){
    //   b.changeRGBT([127, 127, 255, 127]);
    // } else{
    //   b.changeRGBT(defaultColor);
    // }
    
    //overlapping
    // let overlapping = false;
    // for (let b2 of balls){
    //   if (b !== b2 && b.intersects(b2)){
    //     overlapping = true;
    //   }
    // }
    // if (overlapping) {
    //   b.changeRGBT([127, 127, 255, 127]);
    // } else {
    //   b.changeRGBT([255, 0, 255, 127]);
    // }
    
  }
}