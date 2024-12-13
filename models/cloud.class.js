class Cloud extends MovableObject{
    y = 30;
    width = 500;
    heigt = 375

    constructor(){
        super().loadImage('img/5_background/layers/4_clouds/1.png');
        this.x = Math.random() * 500;
    }


}

