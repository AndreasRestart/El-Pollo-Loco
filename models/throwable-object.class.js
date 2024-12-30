class ThrowableObject extends MovableObject {
    constructor(x,y){
        super.loadImage("img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png");
        
        this.x = x;
        this.y = y;
        this.height = 100;
        this.width = 60;
        this.trow(100, 1502);
    }
    trow() {
        this.x = x;
        this.y = y;
        this.speedY = 30;
        this.applyGravity();
        setInterval(() => {
        this.x += 10;
},25);
    }
}