class Confetti {
    constructor(_x, _y, _s) {
      this.x = _x;
      this.y = _y;
      this.speed = _s;
      this.time = random(0, 100);
      this.color = random(confettiColor);

      this.phase = random(0.5, 2);
      this.size = random(width / 25, height / 50);
      this.form = round(random(0, 1));
    }
  
    confettiDisplay() {
      fill(this.color);
      // blendMode(SCREEN);
      noStroke();
      push();
      translate(this.x, this.y);
     
      rotate(this.time);
      rectMode(CENTER);
      if (this.form === 0) {
        rect(0, 0, this.size, this.size / 2);
      } else {
        ellipse(0, 0, this.size);
      }
      pop();
  
      this.time = this.time + 0.1;
  
      this.speed += 1 / 200;
  
      this.y += this.speed;
    }
  }