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

  world;
  walkingSound = new Audio("audio/sand.mp3");


  constructor() {
    super().loadImage("img/2_character_pepe/2_walk/W-21.png");
    this.loadImages(this.imagesWalking);
    this.applyGravity();
    this.animate();
  }


  animate() {

    setInterval(() => {
      this.walkingSound.pause()
      if (this.world.keyboard.right && this.x < this.world.level.levelEndX) {
        this.x += this.speed;
        this.otherDirection = false;
        this.walkingSound.play();
      }

      if (this.world.keyboard.left && this.x > 0) {
        this.x -= this.speed;
        this.otherDirection = true;
      }
      this.world.cameraX = -this.x + 100;
    }, 1000 / 60);

   
   
   
   
   
    setInterval(() => {
      if (this.world.keyboard.right || this.world.keyboard.left) {
       this.playAnimation(this.imagesWalking);
      }
    }, 100);
  }

  jump() {

  }
}
