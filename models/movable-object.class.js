class MovableObject {
    x = 120;
    y = 280;
    img;
    heigt = 195;
    width = 90;


loadImage(path) {
this.img = new Image();
this.img.src = path; 

}

    moveRight() {
        console.log('Moving Right'); 
    }



    moveLeft (){

    }

}