class Chicken extends MovableObject{
y= 370
heigt = 60;
width = 60;

    constructor(){
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png', 'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png');
        
        this.x = 200 + Math.random() * 500;
        this.animate();
    }
    animate() {
        setInterval(()=>{
            
            this.x -= 0.15;
            
        },1000 / 60)
     }

}
