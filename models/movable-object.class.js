class MovableObject {
  x = 120;
  y = 280;
  img;
  height = 195;
  width = 90;
  speed =0.15;
  imageCache = {};
  currentImage = 0;
  speed = 0.15;
  otherDirection = false;
  speedY = 0;
  acceleration = 2.5;



  applyGravity(){
  setInterval(()=> {
    if(this.y < 180) {
      this.y -= this.speedY;
      this.speedY -= this.acceleration;
      }
      },1000 / 25);
      }
    iaAboutGround(){
  return this.y < 180;
  }

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }
  playAnimation(images) {
    let i = this.currentImage % images.length;
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }

  moveRight() {
    console.log("Moving Right");
  }

  moveLeft() {
    setInterval(() => {
            
      this.x -= 0.15;
      
  },1000 / 60)
  }

}
