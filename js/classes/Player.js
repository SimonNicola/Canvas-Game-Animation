/* 
   Class to represent a player in the game.
   The player has a position (x, y), dimensions (width, height), and a velocity for movement.
   Methods are provided for drawing and updating the player's state, including handling gravity acceleration.
*/
class Player {
    constructor() {
        // Initial position of the player
        this.position = {
            x: 100,
            y: 100,
        }

        // Velocity for movement, initially zero
        this.velocity = {
            x: 0,
            y: 0,
        }

        // Dimensions of the player
        this.width = 100;
        this.height = 100;

        // Object to store various sides of the player for collision detection
        this.sides = {
            // The bottom side calculated from the top and height
            bottom: this.position.y + this.height
        }
    }

    /* Draws the player on the canvas */
    draw() {
        c.fillStyle = "red";
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    /* 
        Updates the position of the player, including handling gravity acceleration.
        In the HTML canvas coordinate system, increasing y-coordinates move downward,
        so decreasing the y-coordinate actually makes the player move towards the top of the canvas.
    */  
    update() {
        // Adds the velocity to the position of the player for movement
        this.position.y += this.velocity.y;

        // Checks if the player is above the bottom of the canvas
        if (this.sides.bottom + this.velocity.y < canvas.height) {
            // Applies gravity acceleration (positive value for downward acceleration)
            this.velocity.y += 1;

            // Updates the bottom side of the player
            this.sides.bottom = this.position.y + this.height;
        } else {
            // If the player is at the bottom, stops further downward movement
            this.velocity.y = 0;
        }
    }
}
