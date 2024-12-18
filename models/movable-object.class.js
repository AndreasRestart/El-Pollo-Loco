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

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = this.img;
    });
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
