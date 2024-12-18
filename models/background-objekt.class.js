class BackgroundObject extends MovableObject{
    
    width = 720;
    height = 480;
  

    constructor(imagePath, x){
        super().loadImage(imagePath)
            
            
        this.x = x;
        this.y = 480 - this.height;

    }





}

// img/5_background/layers/1_first_layer/1.png'
// img/5_background/layers/1_first_layer/2.png