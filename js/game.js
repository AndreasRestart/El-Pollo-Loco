let canvas;
let world;
let keyboard = new Keyboard();

function init() {
canvas = document.getElementById('canvas');
world = new World(canvas,keyboard);

console.log('My Character is',world.character);

}
// function fullScreen(){
//     canvas.requestFullScreen();
// }


// ThrowRequestStop = new Date().getTime();
// ThrowRequestStart = 0;

// constructor(){
//     this.adddKeyPressEvents();
//     this.addBtsPressEvnets()
// }

// addBtsPressEvents() {
//     document.getElementById('forword').addEventListener('touchstart', (event)=> {
//     event.preventDefault();
//     this.left = true;
// });
// document.getElementById('forword').addEventListener('touchend', (event)=> {
//     event.preventDefault();
//     this.left = false;
// });
// document.getElementById('backword').addEventListener('touchstart', (event)=> {
//     event.preventDefault();
//     this.left = true;
// });
// document.getElementById('backword').addEventListener('touchend', (event)=> {
//     event.preventDefault();
//     this.left = false;
// });
// document.getElementById('jump').addEventListener('touchstart', (event)=> {
//     event.preventDefault();
//     this.left = true;
// });
// document.getElementById('jump').addEventListener('touchend', (event)=> {
//     event.preventDefault();
//     this.left = false;
// });
// document.getElementById('throw').addEventListener('touchstart', (event)=> {
//     event.preventDefault();
//     if (this.ThrowRequestStop > this.ThrowRequestStart && !
//         if ((new Date().getTime() - this.ThrowRequestStart) > 
//         this.ThrowRequestStart = new Date().getTime()
//     }
//     this.d = true;
// }
// });

// document.getElementById('throw').addEventListener('touchend', (event)=> {
//     event.preventDefault();
//     this.ThrowRequestStop = new Date().getTime()
//     this.d = false;
// });

// }

// addKeyPressEvents() {
window.addEventListener('keydown',(event) => {
    if(event.keyCode == 39) {
        keyboard.right = true;
    }
    if(event.keyCode == 37) {
        keyboard.left = true;
    }
    if(event.keyCode == 38) {
        keyboard.up = true;
    }
    if(event.keyCode == 40) {
        keyboard.down = true;
    }
    if(event.keyCode == 32) {
        keyboard.space = true;
    }
    if(event.keyCode == 68) {
        keyboard.d = true;
    }

    console.log(event);
});

window.addEventListener('keyup',(event) => {
    if(event.keyCode == 39) {
        keyboard.right = false;
    }
    if(event.keyCode == 37) {
        keyboard.left = false;
    }
    if(event.keyCode == 38) {
        keyboard.up = false;
    }
    if(event.keyCode == 40) {
        keyboard.down = false;
    }
    if(event.keyCode == 32) {
        keyboard.space = false;
    }
    if(event.keyCode == 68) {
        keyboard.d = false;
    }
    

    console.log(event);
});
// }
