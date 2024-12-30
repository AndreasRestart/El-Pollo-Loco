class Endboss extends MovableObject {

height = 500;
width = 320;
y = -35;
x = 150;



  imagesWalking = [
    "img/4_enemie_boss_chicken/2_alert/G5.png",
    "img/4_enemie_boss_chicken/2_alert/G6.png",
    "img/4_enemie_boss_chicken/2_alert/G7.png",
    "img/4_enemie_boss_chicken/2_alert/G8.png",
    "img/4_enemie_boss_chicken/2_alert/G9.png",
    "img/4_enemie_boss_chicken/2_alert/G10.png",
    "img/4_enemie_boss_chicken/2_alert/G11.png",
    "img/4_enemie_boss_chicken/2_alert/G12.png"
  ];

  // imagesAlert = [
  //   "img/4_enemie_boss_chicken/2_alert/G5.png",
  //   "img/4_enemie_boss_chicken/2_alert/G6.png",
  //   "img/4_enemie_boss_chicken/2_alert/G7.png",
  //   "img/4_enemie_boss_chicken/2_alert/G8.png",
  //   "img/4_enemie_boss_chicken/2_alert/G9.png",
  //   "img/4_enemie_boss_chicken/2_alert/G10.png",
  //   "img/4_enemie_boss_chicken/2_alert/G11.png",
  //   "img/4_enemie_boss_chicken/2_alert/G12.png"
  // ];

//   imagesAttack = [
// // "img/4_enemie_boss_chicken/3_attack/G14.png",
// // "img/4_enemie_boss_chicken/3_attack/G15.png",
// // "img/4_enemie_boss_chicken/3_attack/G16.png",
// // "img/4_enemie_boss_chicken/3_attack/G17.png",
// // "img/4_enemie_boss_chicken/3_attack/G18.png",
// // "img/4_enemie_boss_chicken/3_attack/G19.png",
// // "img/4_enemie_boss_chicken/3_attack/G20.png",
// //   ];

// imagesHurt = [
// "img/4_enemie_boss_chicken/4_hurt/G21.png",
// "img/4_enemie_boss_chicken/4_hurt/G22.png",
// "img/4_enemie_boss_chicken/4_hurt/G23.png"
// ];



//   imagesDead = [
//     "img/4_enemie_boss_chicken/5_dead/G24.png",
//     "img/4_enemie_boss_chicken/5_dead/G25.png",
// "img/4_enemie_boss_chicken/5_dead/G26.png"
//   ];

 
  constructor() {
    
    super().loadImage(this.imagesWalking[0]);
    this.loadImages(this.imagesWalking);
    // this.loadImages(this.imagesAlert);
    // this.loadImages(this.imagesAttack);
    // this.loadImage(this.imagesHurt);
    // this.loadImages(this.magesDead);
    // this.applyGravity();
    this.x = 2600;
    this.animate();
  }


//   setInterval(() => {
//     if (this.isDead()) {
//       this.playAnimation(this.imagesDead);
//     } else if (this.isHurt()) {
//      this.playAnimation(this.imagesHurt);
//     } else if (this.isAboveGround()) {
//       this.playAnimation(this.imagesjumpCharacter);
//     } else {
//       if (this.world.keyboard.right || this.world.keyboard.left) {
//         this.playAnimation(this.imagesWalking);
//       }
//     }
//   }, 100);
// }

  animate() {

    setInterval(() => {
        this.playAnimation(this.imagesWalking);
    }, 200);
  }
}
