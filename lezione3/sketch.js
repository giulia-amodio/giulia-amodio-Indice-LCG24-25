

//let canvasXMax=200;
//let canvasYMax=200;
//function setup() {
 // createCanvas(canvasXMax, canvasYMax);
  
//}

//function draw() {
  
  //textSize(15);
  //let string_toprint="ContenutoMousex="+mouseX+", y="+mouseY+""; 
 //text(string_toprint, 20, 20); 
 //strokeWeight (5)
 //line (0, mouseX, canvasXMax, mouseY);
 //feedback tasto mouse sinistro
 //vorremmo disegnare una linea gilla se schiacciamo il mouse
 //P5 --> ha una variabile che assume il valore di true se il mouse viene schiacciato
 // altrimenti è false
 //if(mouseIsPressed == true) {
 // if (mouseButton == RIGHT) {
  //  background (220);
  //}
  //allora coloriamo di giallo
 // stroke ("yellow")
 //} //altrimenti nero
 //else {
 // stroke ("black")
 //}
 //mouseIsPressed;

//}

let canvasXMax=400, canvasYMax=400;
let moonXpos=255;
let moonYpos=50;
let slider;

function setup() {
  createCanvas(canvasXMax, canvasYMax);
  slider = createSlider(0, 255, 0, 1);
  slider.position (0, canvasYMax -60);

}

function draw() {
  background("navy");
  frameRate (5); // velocità dei frame
  //moon
  colorMode(RGB);
  fill(255, 255, 0, 200);
  stroke(255, 255, 255, 100)
  strokeWeight(10); //large outline
  circle(moonXpos, 50, 100)
  //overlappin circle
  stroke("navy");
  fill("navy");
  circle(moonXpos+50, 50,100);

  //MOVIMENTO LUNA
  //metodo di aggiornamento 1
 //moonXpos= moonXpos+1 //per animazione luna
  //per non far uscire la luna dai bordi dovremmo far iniziare il processo
  //if (moonXpos > canvasXMax) { //se esce dal foglio ripartiamo da zero
    //moonXpos= moonXpos -200;
   // moonXpos= 0;
  //}

  //metodo di aggiornamento 2
  // variabile continua a agiiungere 1 per ogni frame disegnato
  moonXpos = (frameCount*10 + 700)% canvasXMax;
  // operatore di modulo
  //1 % 400 --> 1/400 =0, resto 1
  // 2 % 400 --> 2/400 =0 resto2

  // per sapere se un numero è pari, prendiamo un numero lo dividiamo per due e vediamo se il resto è zero
  // a livello di programmazione questa cosa si fa con il modulo --> numero % 2 = 0
  //il modulo è un operatore che ci aiuta a delimitare dei confini, per vedere se un numero è dentro questi confini


  stroke(0);//black outline
  strokeWeight(1);//outline thickness
  fill("green");
  let y = 300;
  rect(0, y, canvasXMax, y);

  stroke(0);//black outline
  strokeWeight(1);//outline thickness
  let x_casa =0;
  let house_height = 100, house_width=100;
  let slidervalue = slider.value();

  for (let numero_case = 0; numero_case < 3; numero_case++) {
    fill("white");
    rect(x_casa, y - house_height, house_width, house_height);
    fill(slidervalue);
    let roof_height = 80;
    triangle(x_casa, y - house_height, x_casa + house_width, y - house_height, x_casa + (house_width / 2), y - house_height - roof_height);
    
    // Rollover effect
    let left_corner = y - house_height;
    if ((mouseX > x_casa) && (mouseX < x_casa + house_width) && (mouseY > left_corner) && (mouseY < left_corner + house_height)) {
      fill("navy");
      rect(x_casa, y - house_height, house_width, house_height);
    }
    
    x_casa += house_width + 30;
  }


  // vogliamo aggiungere delle stelle che compaiono in modo casuale nel cielo
  //numero= numero +1
  //numero + =1
  //numero ++

  let xStar=0;
  let yStar=0;
  for (let nS=0; nS < 5; nS++) {
    stroke (random (0, 255), random (0, 255), random (0, 255));
    strokeWeight (random(0,50));
    point (xStar,yStar);
    //per generare casualmente esiste la funzione random
    xStar = random(0, canvasXMax);
    yStar = random (0, canvasYMax/2);
    
  }

  //voglio disegnare il colore di una casetta se ci passo sopra con il mouse
  //--> rollover
  // siamo dentro le x della casa?
  // mouseX sarà > di x_casa
  //ma anche mouseX < x_casa+house_width
  //stessa cosa per le y
  //mouseY > left_corner
  // mouseY < left_corner+house_height
  // &&, ||
  // c1 && c2 --> entrambe le condizioni siano vere
  // c1 || c2 --> almeno una delle condizioni siano vere
  

  }

  // se voglio che la luna si fermi
  //if ((frameCount== 50)) {
  //  noLoop ()
  //}


  //displays the x and y position of the mouse on the canvas
  stroke("white");
  strokeWeight(1);
  fill(255);//white text
  textSize(50)
  text (frameCount, 5, 50 )
  //text(`X=${mouseX}, Y=${mouseY}`, 5, 50);
