let button;
let elem;
let dice = 1;
let numbers = [1, 2, 5, 79]
// x accedere usare idx, 4 elementi
//il numero degli elementi di un arrei sarà sempre uguale agli indici
// #elem =4, 0 -- #elem -1, 0-->3
let colors = [ "red", "green", "pink", "blue", "orange", "yellow"]
function setup() {
  elem = createElement( "h2", "Keep rolling");
  elem.position(0, 0);
  createCanvas(400, 400);
  button = createButton("roll the dice");
  button.position(200, 200);
  button.mousePressed(rollDice);
}

function draw() {
  background(220);
  stroke("black");
  strokeWeight(2);
  //corrispondere
  //se il colore è 1 rosso
  //se il colore è 2 verde
  //se il colore è 3 rosa
  // 4 blu
  //5 arancione
  //6 giallo
  
  let color = colors[dice-1];
  fill(color);
  textSize(30);
  text("Dice value "+ dice, 5, 300);
}

function rollDice(){
  dice = random(1,6);
  //vogliamo solo numeri interi
  // dice = floor(dice);
  //intero superiore, 1.1 -->2
  dice = ceil(dice);
}