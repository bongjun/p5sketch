var slider;
var p;

function setup() {
  noCanvas();
  slider = createSlider(10, 64, 16);
  //elem = createElement('h2','My name is Bongjun');
  p = createP('My name is Bongjun');
  //p.style("font-size", "30px");
  
  //input: realtime change
  slider.input(changeSize);
  //slider.changed(changeSize);
  
  
}

function changeSize(){
  p.style("font-size", slider.value()+"px");
  //p.style('background-color', "yellow");
 
}

function draw() {
  background(220);
}