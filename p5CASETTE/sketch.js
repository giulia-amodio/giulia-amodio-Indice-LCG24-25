
//variabili per cambiare la grandezza del canva
let xsize = 600;
let ysize = 400;


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background("darkblue");

  fill ("green")
  stroke ("black")
  strokeWeight (2);
  rect (0, 200, 600, 1000);

  strokeWeight (5);
  stroke ("white");
  fill ("yellow");
  circle (600, 0, 200)

  
  fill ("white")
  strokeWeight (2)
  stroke ("black")
  rect (0,100, 100, 100)

  strokeWeight (2)
  stroke ("black")
  fill ("red")
  triangle (0, 100, 50, 30, 100, 100)


}
