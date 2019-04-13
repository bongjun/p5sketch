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
  
  clicked(x, y){
    let d = dist(x, y, this.x, this.y);
    if (this.r >= d){
      this.rgbt = [255, 255, 255, 255]
    }
  }
  
  show(){
    noFill();
    stroke(this.rgbt[0], this.rgbt[1], this.rgbt[2], this.rgbt[3]);
    //stroke('rgba(100%,0%,100%,0.5)');
	strokeWeight(4);
    ellipse(this.x, this.y, this.r);
  }
  
  intersects(that){
    let d = dist(this.x, this.y, that.x, that.y);
    return (d < this.r + that.r);
  }
  
  recoverColor(){
    if (this.rgbt[3] >127){
      this.rgbt[3] = this.rgbt[3] -3
    }
    if (this.rgbt[1] >0){
      this.rgbt[1] = this.rgbt[1] -3
    }
  }
  
  changeRGBT(rgbt){
    this.rgbt = rgbt
  }
  
  mouseOver(mouseX, mouseY){
    let d = dist(this.x, this.y, mouseX, mouseY);
    return (d < this.r);
  }
  
  sizeUp(amount){
    this.r += amount
  }
  
}