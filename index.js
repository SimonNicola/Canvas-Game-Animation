/* selects the canvas Tag */
var canvas = document.getElementById("myCanvas");
/* creates a 2d element on the canvas */
var c = canvas.getContext("2d");

/* sets the size of the canvas */
canvas.width = 1024
canvas.height = 576


const player = new Player()
/* 
    Animation loop: This function will be called recursively, creating the effect of an animation.
    It paints a white background square and then draws a red square on top of it.
    The position of the red square changes vertically on each call, creating the animation effect. 
*/

function animate() {
    window.requestAnimationFrame(animate);

    c.fillStyle = "white";
    c.fillRect(0, 0, canvas.width, canvas.height);

    player.draw()
    player.update()
    
}

animate();
