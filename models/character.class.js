class Character extends MovableObject {
  height = 280;
  y = 80;
  speed = 10;
  imagesWalking = [
    "img/2_character_pepe/2_walk/W-21.png",
    "img/2_character_pepe/2_walk/W-22.png",
    "img/2_character_pepe/2_walk/W-23.png",
    "img/2_character_pepe/2_walk/W-24.png",
    "img/2_character_pepe/2_walk/W-25.png",
    "img/2_character_pepe/2_walk/W-26.png",
  ];

  imagesjumpCharacter = [
    "img/2_character_pepe/3_jump/J-31.png",
    "img/2_character_pepe/3_jump/J-32.png",
    "img/2_character_pepe/3_jump/J-33.png",
    "img/2_character_pepe/3_jump/J-34.png",
    "img/2_character_pepe/3_jump/J-35.png",
    "img/2_character_pepe/3_jump/J-36.png",
    "img/2_character_pepe/3_jump/J-37.png",
    "img/2_character_pepe/3_jump/J-38.png",
    "img/2_character_pepe/3_jump/J-39.png",
  ];

  world;
  walkingSound = new Audio("audio/sand.mp3");

  constructor() {
    super().loadImage("img/2_character_pepe/2_walk/W-21.png");
    this.loadImages(this.imagesWalking);
    this.loadImages(this.imagesjumpCharacter);
    this.applyGravity();
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.walkingSound.pause();
      if (this.world.keyboard.right && this.x < this.world.level.levelEndX) {
    this.moveRight();
    this.otherDirection = false;
    this.walkingSound.play();
      }

      if (this.world.keyboard.left && this.x > 0) {
     this.moveLeft();
     this.otherDirection = true;
     this.walkingSound.play();
      }

      if(this.world.keyboard.space  && !this.isAboveGround()) {
       this.jump();
      }

      this.world.cameraX = -this.x + 100;
    }, 1000 / 60);

    setInterval(() => {
      if (this.isAboveGround()) {
        this.playAnimation(this.imagesjumpCharacter);
      } else {
        if (this.world.keyboard.right || this.world.keyboard.left) {
          this.playAnimation(this.imagesWalking);
        }
      }
    }, 100);
  }

  jump() {
    this.speedY = 30;
  }
}
