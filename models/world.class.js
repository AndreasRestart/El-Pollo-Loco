class World {
  character = new Character();
  level = level1;

  canvas;
  ctx;
  keyboard;
  cameraX = 0;
  statusBar = new Statusbar();
  throwableObjects = []

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.checkCollisions();
    this.run();
    // this.checkEndbossIntro();
  }

  setWorld() {
    this.character.world = this;
  }
  checkCollisions() {
    setInterval(() => {
    this.checkCollisions();
    this.checkThrowObjects();
    }, 200);
  }

  checkThrowObjects() {
    if(this.keyboard.D) {
      let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100)
      this.throwableObjects.push(bottle);
    }
  }



  checkCollisions(){
      
    this.level.enemies.forEach((enemy) => {
      if( this.character.isColliding(enemy)) {
        this.character.hit();
        this.statusBar.setPercentage(this.character.energy)
        this.character.height();
        this.character.energy -= 5;
        console.log('Collision with Character, energy ', this.character.energy);
      }
      });
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.translate(this.cameraX, 0);
    this.addObjectsToMap(this.level.backgroundObjects);
    this.ctx.translate(-this.cameraX, 0);
    this.addToMap(this.statusBar);
    this.ctx.translate(this.cameraX, 0);
    this.addObjectsToMap(this.level.clouds);
    this.addToMap(this.character);
    this.addObjectsToMap(this.level.enemies);
    this.addObjectsToMap(this.throwableObjects);
    // this.addObjectsToMap(this.coints);
    // this.addObjectsToMap(this.smallChicken);
    // this.addObjectsToMap(this.endBoss);
    this.ctx.translate(-this.cameraX, 0);
    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  addObjectsToMap(objects) {
    objects.forEach((object) => {
      this.addToMap(object);
    });
  }

  addToMap(MovableObject) {
    if (MovableObject.otherDirection) {
      this.flipImage(MovableObject);
    }

    MovableObject.draw(this.ctx);
    MovableObject.drawFrame(this.ctx);

    if (MovableObject.otherDirection) {
      this.flipImageBack(MovableObject);
    }
  }
  flipImage(MovableObject) {
    this.ctx.save();
    this.ctx.translate(MovableObject.width, 0);
    this.ctx.scale(-1, 1);
    MovableObject.x = MovableObject.x * -1;
  }
  flipImageBack(MovableObject) {
    MovableObject.x = MovableObject.x * -1;
    this.ctx.restore();
  }
}
