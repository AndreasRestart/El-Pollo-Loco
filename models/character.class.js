class Character extends MovableObject {
  heigt = 280;
  y = 155;
  imagesWalking = [
    "img/2_character_pepe/2_walk/W-21.png",
    "img/2_character_pepe/2_walk/W-22.png",
    "img/2_character_pepe/2_walk/W-23.png",
    "img/2_character_pepe/2_walk/W-24.png",
    "img/2_character_pepe/2_walk/W-25.png",
    "img/2_character_pepe/2_walk/W-26.png",
  ];
  currentImage = 0;

  constructor() {
    super().loadImage("img/2_character_pepe/2_walk/W-21.png");
    this.loadImages(this.imagesWalking);

    this.animate();
  }

  animate() {
    setInterval( () => {
        let i = this.currentImage % this.imagesWalking.lenght;
        let path = this.imagesWalking[i];
        this.img = this.imageCache[path];
        this.currentImage++;
        }, 100)
  }

  jump() {}
}
