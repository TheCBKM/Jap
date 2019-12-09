japs=[],x=0,y=0,count=0
function setup() {
  createCanvas(windowWidth,windowHeight);
  x=windowWidth/100
  y=windowHeight/100
}

function draw() {
    background(254);
  if(count%108==0&&count!=0){
        background(random(255),random(255),random(255));

  }
textSize(32);
fill(0, 102, 153);
text(count%108, 50*x, 50*y);
  japs.map(j=>{
    fill(j.r,j.g,j.b,j.a)
    ellipse(j.x, j.y, 55, 55);
    fill(0, 102, 153);
textSize(20);
    text(j.text, j.x-10, j.y+10);

  if(j.y<98*y)
    j.y+=5  
  })
  
}


function mouseClicked() {
  count++
  if(count%108==0)
    japs=[]
  console.log(mouseX,mouseY)
  d={
    x:mouseX,
    y:mouseY,
    text:'राम',
    r:random(255),g:random(255),b:random(255),a:random(255)
  }
  japs.push(d)

}
