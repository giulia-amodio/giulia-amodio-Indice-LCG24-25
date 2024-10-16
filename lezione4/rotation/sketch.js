let angle=5
function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  push() //push e pop li uso per delimitare cosa voglio modificare
  strokeWeight(1);
  fill("purple");
  rotate (angle*0.7);
  rect (50,50,100,50);
  //con translate io traslo tutto il canvas, non solo il rettangolo
  //il rettangolo ora si trova a (150,150) che sarebbe (50+100,50+100)
  //translate(100,100);
  pop();
  
  fill("green")
  rect(0,0,200,30);
  strokeWeight(5);
  point(0,0)
  point(50,50);
  push ()
  translate(200,200);
  rotate(angle);
  fill("orange");
  circle(0,0,100);
  //d=100 r=50
  line(0,-50,0,50);
  pop();

  angle =angle + 2;
}
