class Chicken extends MovableObject{
y= 370
heigt = 60;
width = 60;

imagesChickenGo = [
    'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
    'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
    'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
]
currentChickenImgae = 0;

    constructor(){
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png', 'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png');
        this.loadImages(this.imagesChickenGo)
        
        this.x = 200 + Math.random() * 500;
        this.speed = 0.15 + Math.random() * 0.25
        this.animate();
    }

    animate() {
    this.moveLeft();
        setInterval( () => {
            let i = this.currentImage % this.imagesChickenGo.lenght;
            let path = this.imagesChickenGo[ i];
            this.img = this.imageCache[path];
            this.currentImage++;
            }, 200)
      }

}
