class Character extends MovableObject {
  height = 280;
  y = 155;
  speed = 10;

  imagesWalking = [
    "img/2_character_pepe/2_walk/W-21.png",
    "img/2_character_pepe/2_walk/W-22.png",
    "img/2_character_pepe/2_walk/W-23.png",
    "img/2_character_pepe/2_walk/W-24.png",
    "img/2_character_pepe/2_walk/W-25.png",
    "img/2_character_pepe/2_walk/W-26.png",
  ];
  currentImage = 0;
  world;

  constructor() {
    super().loadImage("img/2_character_pepe/2_walk/W-21.png");
    this.loadImages(this.imagesWalking);
    this.animate();
  }


  animate() {
 setInterval(() => {
  if (this.world.keyboard.right) {
    this.x +=this.speed;
    this.otherDirection = true;
  }

  if (this.world.keyboard.left) {
    this.x +=this.speed;
    this.otherDirection = true;
  }
  this.world.cameraX = -this.x;
  }, 1000 / 60);
  



  setInterval(() => {

  if (this.world.keyboard.left || this.world.keyboard.right) {
        let i = this.currentImage % this.imagesWalking.length;
        let path = this.imagesWalking[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }
  }, 100);
  }


  jump() {

  }
}  

