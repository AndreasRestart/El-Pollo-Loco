class DrawableObject {
    x = 120;
    y = 280;
    img;
    height = 195;
    width = 90;
  imageCache = {};
  currentImage = 0;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
      }
     draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
      }
     

     loadImages(arr){
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            img.style = 'transform: scales(-1)';
            this.imageCache[path] = img;
        });
     }

     drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken || this instanceof Endboss || this instanceof smallChicken) {
          ctx.beginPath();
          ctx.lineWidth = "10";
          ctx.strokeStyle = "blue";
          ctx.rect(this.x, this.y, this.width, this.height);
          ctx.stroke();
        }
      }
    
}