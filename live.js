let confettiColor = [], confetti = [];

function setup() {
  
 
 let cnx=createCanvas(windowWidth,windowHeight);
 cnx.position(0,0)
	confettiColor = [color('#00aaff'), color('#39ff14'), color('#ff073a')];
  for (let i = 0; i < 300; i++) {
    confetti[i] = new Confetti(random(0, width), random(-height, 0), random(-10, 10));
  }
}

function draw() {
   
  background(0);
  push()
  fill(255) 
  textAlign(CENTER);
  textSize(30);
  text("Yay Its my birthday",50/100*windowWidth,30/100*windowHeight)
  pop()
  
	
	for (let i = 0; i < confetti.length / 2; i++) {
    confetti[i].confettiDisplay();

    if (confetti[i].y > height) {
      confetti[i] = new Confetti(random(0, width), random(-height, 0), random(-1, 1));
    }
  }

  for (let i = int(confetti.length / 2); i < confetti.length; i++) {
    confetti[i].confettiDisplay();

    if (confetti[i].y > height) {
      confetti[i] = new Confetti(random(0, width), random(-height, 0), random(-1, 1));
    }
  }
}