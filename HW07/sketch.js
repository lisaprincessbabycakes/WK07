let sentence = ['i will marry a 💍', 'tall 💪🏻', 'masculine 🧔🏻‍♂️', 'lovey dovey 👩‍❤️‍💋', 'man 🤴🏻', 'who cannot breathe 😵', 'when i ignore his existence 👀🥰'];
let word;
let x = 600;
let y = 400;
let ts = 100;
let speed = 0.5;
let r = 0;
let colorR = 255, colorG = 255, colorB = 255;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220, 40, 20, 100);
  textAlign(CENTER, CENTER);
  angleMode(DEGREES);

  word = sentence[0];

  setTimeout(one, 3000);
  setTimeout(two, 6000);
  setTimeout(three, 10000);
  setTimeout(four, 15000);
  setTimeout(five, 20000);
  setTimeout(six, 25000);
}

function one() {
  word = sentence[1];
  ts = 200;
  speed = 1;
  changeColor();
}

function two() {
  word = sentence[2];
  ts = 100;
  speed = 1;
  changeColor();
}

function three() {
  word = sentence[3];
  ts = 80;
  speed = -1;
  r = 180;
  changeColor();
}

function four() {
  word = sentence[4];
  ts = 140;
  changeColor();
}

function five() {
  word = sentence[5];
  ts = 60;
  changeColor();
}

function six() {
  word = sentence[6];
  ts = 50;
  speed = -1;
  changeColor();
}

function draw() {
  background(255,182,193, 50); 
  
  translate(x, y);
  rotate(r);
  r += speed; 

  textSize(ts + random(0,3)); // bouncy effect 
  
  fill(colorR, colorG, colorB);
  
  text(word, 0, 0);
 
}

function changeColor() {
  colorR = random(100, 255);
  colorG = random(100, 255);
  colorB = random(100, 255);
}

