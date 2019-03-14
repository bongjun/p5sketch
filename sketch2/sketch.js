let balls = [];
let direction=1
function setup() {
  createCanvas(500, 500);
  
  for (let i = 0; i< 100; i++){
  balls[i] = new Ball(width/2, height/2, 50);
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
  }
}