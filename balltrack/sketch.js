
let classifier;
let x=0,y=0,a=0,b=0;
// Label (start by showing listening)
let label = "listening";

// Teachable Machine model URL:
let soundModelURL = 'https://teachablemachine.withgoogle.com/models/WZCkn_fx/model.json';


function preload() {
  // Load the model
  classifier = ml5.soundClassifier(soundModelURL);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  a=windowWidth/2
  b=windowHeight/2
  // Start classifying
  // The sound model will continuously listen to the microphone
  classifier.classify(gotResult);
}

function draw() {
  background(0);
  // Draw the label in the canvas
  fill(255);
  textSize(32);
  textAlign(CENTER, CENTER);
  text(label, width / 2, height / 2);
  fill(255)
  
  if(a+x>0&&a+x<windowWidth && b+y>0 && b+y<windowHeight){
  a+=x
  b+=y
  }
console.log(a,b,x,y)
  
  ellipse(a,b,50)
}


// The model recognizing a sound will trigger this event
function gotResult(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  // The results are in an array ordered by confidence.
  // console.log(results[0]);
  label = results[0].label;
  if(label=="STOP"){
x=0;y=0
  }
   else if(label=="UP"){
  y-=5
  }
   else if(label=="DOWN"){
  y+=5
  }
   else if(label=="RIGHT"){
  x+=5
  }
   else if(label=="LEFT"){
  x-=5
  }
  
}