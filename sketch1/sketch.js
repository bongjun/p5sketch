var mic;

var mySound;

var delta=1;

let newMicVol = 0;
var growing = true;
// function preload() {
//   mySound = loadSound('HighwayRider.mp3');
// }

function setup(){
  createCanvas(500, 500);
  //background(255, 204, 0);
  

  // mic = new p5.AudioIn()
  // mic.start();
  //fft = new p5.FFT();
  //fft.setInput([mic])
  
  //mySound.setVolume(0.4);
  //mySound.play();
  
  
  
}
function draw(){
  background(255, 204, 0);
  
  //micLevel = mic.getLevel();
  strokeWeight(5)
  
  //let newMicVol = map(micLevel, 0, 0.03, 0, height);
  //print(newMicVol)
  
  

  if (newMicVol > height){
    growing = false;
    delta = -1;
  }else if(newMicVol < 0){
    growing = true;
    delta = 1;
  }
  
  // if (growing < height){
  //   delta = 1
  // }else{
  //   delta = -1
  // }
  
  newMicVol += 1*delta;
  print(newMicVol);
  push()
  ellipse(mouseX, mouseY, newMicVol, newMicVol);
  fill(0);
  ellipse(mouseX, mouseY, newMicVol*0.7, newMicVol*0.7);
  fill(255);
  ellipse(mouseX, mouseY, newMicVol*0.4, newMicVol*0.4);
  pop()
  
  
  
  
  //fill(10, 10, 10);
  //ellipe(mouseX, 200, newMicVol, newMicVol);
  
//   push()
//   let angle = map(micLevel, 0, 0.03, 0, 360);

//   angleMode(DEGREES);
//   translate(width/2-50, height/2-50);
//   rotate(angle);
//   fill(134, 13, 255);
//   rect(width/2-50, height/2-50, 100, 100)
//   pop()
  
  
  //var spectrum = fft.analyze();
  //print(spectrum)
  
  // for (var i = 0; i< spectrum.length; i++){
  //   var x = map(i, 0, spectrum.length, 0, width);
  //   var h = -height + map(spectrum[i], 0, 255, height, 0);
  //   rect(x, height, width / spectrum.length, h )
  // }
  

}