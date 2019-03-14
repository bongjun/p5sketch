class Ball {
  
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }
  
  move() {
    this.x = this.x + random(-3, 3);
    this.y = this.y + random(-3, 3);
  }
  
  show(){
    noFill();
    stroke('rgba(100%,0%,100%,0.5)');
		strokeWeight(4);
    ellipse(this.x, this.y, this.r);
  }
}