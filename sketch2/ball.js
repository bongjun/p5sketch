class Ball {
  
  constructor(x, y, r, rgbt) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.rgbt = rgbt;
    
  }
  
  move() {
    this.x = this.x + random(-3, 3);
    this.y = this.y + random(-3, 3);
  }
  
  clicked(){
    let d = dist(mouseX, mouseY, this.x, this.y);
    if (this.r >= d){
      console.log("clicked!");
    }
  }
  
  show(){
    noFill();
    stroke(this.rgbt[0], this.rgbt[1], this.rgbt[2], this.rgbt[3]);
    //stroke('rgba(100%,0%,100%,0.5)');
    strokeWeight(4);
    ellipse(this.x, this.y, this.r);
  }
}