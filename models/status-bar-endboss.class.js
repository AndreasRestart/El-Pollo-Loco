// class Statusbar extends DrawableObject {

//     images = [
//          'img/7_statusbars/2_statusbar_endboss/blue/blue0.png',
//          'img/7_statusbars/2_statusbar_endboss/blue/blue20.png',
//          'img/7_statusbars/2_statusbar_endboss/blue/blue40.png',
//          'img/7_statusbars/2_statusbar_endboss/blue/blue60.png',
//          'img/7_statusbars/2_statusbar_endboss/blue/blue80.png',
//          'img/7_statusbars/2_statusbar_endboss/blue/blue100.png'

//     ];

//     percentage = 100;

//     constructor(){
//         super().loadImage('img/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png');
//     this.loadImages(this.images);
//     this.x = 40;
//     this.y = 0;
//     this.width = 200;
//     this.height = 60;
//     this.setPercentage(100);
//     }

//     setPercentage(percentage){
//         this.percentage = percentage;
//         let path = this.images[this.resolveImageIndex()]
//         this.img = this.imageCache[path];
//     }

//         resolveImageIndex(){
//             if(this.percentage == 100) {
//              return 5;
//             } else if (this.percentage > 80) {
//                 return 4;
//              }else if (this.percentage > 60) {
//                     return 3;
//              }else if (this.percentage > 40) {
//                         return 2;
//              }else if (this.percentage > 20) {
//                             return 1;
//              }else{
//                                 return 0;
//             }
//           }
//     }
