class MovableObject extends DrawableObject {
  speed = 0.15;
  speed = 0.15;
  otherDirection = false;
  speedY = 0;
  acceleration = 2.5;
  energy = 100;
  lastHit = 0;


  applyGravity() {
    setInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      }
    }, 1000 / 25);
  }

  isAboveGround() {
    if(! this instanceof ThrowableObject) {
      return true;
    } else {
      return this.y < 180;

    }
  }

  
  isColliding(MovableObject) {
    return (
      this.x + this.width > MovableObject.x &&
      this.y + this.height > MovableObject.y &&
      this.x < MovableObject.x &&
      this.y < MovableObject.y + MovableObject.height
    );
  }
  hit() {
    this.energy -= 5;
    if (this.energy < 0) {
      this.energy = 0;
    } else{
this.lastHit = new Date().getTime();
    }
  }


  isHurt(){
let timepassed = new Date().getTime() - this.lastHit;
timepassed = timepassed / 1000;
return timepassed < 1;

  }
isDead() {
  return this.energy == 0;

}


playAnimation(images) {
  let i = this.currentImage % images.length;
  let path = images[i];
  this.img = this.imageCache[path];
  this.currentImage++;
}


  moveRight() {
    this.x += this.speed;

    console.log("Moving Right");
  }

  moveLeft() {
    this.x -= this.speed;
  }

  jump() {
    this.speedY = 30;
  }
}
