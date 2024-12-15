class BackgroundObject extends MovableObject{
    
    width = 720;
    heigt = 480;
  

    constructor(imagePath, x){
        super().loadImage(imagePath)
            
            
        this.x = x;
        this.y = 480 - this.heigt;

    }





}

// img/5_background/layers/1_first_layer/1.png'
// img/5_background/layers/1_first_layer/2.png