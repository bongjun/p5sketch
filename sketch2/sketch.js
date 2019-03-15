let balls = [];
let direction=1
function setup() {
  createCanvas(800, 500);
  
  for (let i = 0; i< 20; i++){
  balls[i] = new Ball(width/2, height/2, 50, [255, 0, 255, 127]);
  }
 
}

function mouseClicked(){
  for (let i=0; i<balls.length; i++){
    balls[i].clicked()
  }
}

function keyPressed(){
  if (keyCode === LEFT_ARROW) {
    balls[balls.length-1].rgbt = [255, 255, 255, 255];
    balls.pop();
    console.log('left')
  } else if (keyCode === RIGHT_ARROW) {
    newBall = new Ball(width/2, height/2, 50, [255, 255, 255, 255]);
    balls.push(newBall);
    console.log('right')
  }
}


function draw() {
  background(0);
  
  for (let i=0; i<balls.length; i++){
    balls[i].move();
    balls[i].show();
    
    if (balls[i].r > 30){
       scaler = random(0, 1)
       direction = -2*scaler
    }else if(balls[i].r <= 10){
       scaler = random(0, 1)
       direction = 2*scaler
    }
     balls[i].r+=1*direction
    
    if (balls[i].rgbt[3] >127){
      balls[i].rgbt[3] = balls[i].rgbt[3] -3
    }
    if (balls[i].rgbt[1] >0){
      balls[i].rgbt[1] = balls[i].rgbt[1] -3
    }
    
  }
}