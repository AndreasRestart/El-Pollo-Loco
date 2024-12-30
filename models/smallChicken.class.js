class smallChicken extends MovableObject {
    y = 20;
    width = 500;
    heigt = 375;
    speed = 0.15
imagesWalking = [
    'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
    'img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
    'img/3_enemies_chicken/chicken_small/1_walk/3_w.png'
];
  
    constructor() {
      super().loadImage('img/3_enemies_chicken/chicken_small/1_walk/1_w.png');
      
this.loadImages(this.imagesWalking);

this.x = 350 + Math.random() * 500;
this.speed = 0.15 + Math.random() * 0.25
      this.animate();
    }


    animate() {
setInterval(() => {
    this.moveLeft();
}, 1000/ 60)

setInterval(() => {
    this.playAnimation(this.imagesWalking)
}, 200)

    }  
  }