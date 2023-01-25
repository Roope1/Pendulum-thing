/*
    TODO:
     * add some colors to the balls
     * add a sound effect to collision
*/


let pendulums = [];

function setup() {
    createCanvas(800, 800);
    for (let i = 0; i <= 10; i++) {
        pendulums.push(new Pendulum(50 + (i * 25)))
    }
}

function draw() {
    background("#696969");
    translate(width / 2, 600);
    line(-300,0,300,0);
    for (let i = 0; i < pendulums.length; i++) {
        pendulums[i].display();
        pendulums[i].move();
    }
}


class Pendulum {
    constructor(length) {
        this.length = length;
        this.pitch = length;
        this.speed = length;

        this.angle = PI;

        this.x = -length;
        this.y = 0;
        
        this.direction = 1;
    }

    display() {
        line(this.x, this.y,0,0)
        ellipse(this.x, this.y,10,10)
    }

    move() {
        
        // TODO: rework this, so every ball has the same movement speed

        this.angle += abs(350 - this.length) / 10000 * this.direction;

        this.x = this.length * cos(this.angle);
        this.y = this.length * sin(this.angle);


        // Checking if a collision happened

        if (this.angle >= 2 * PI) {
            this.direction = -1;
        }
        if (this.angle <= PI) {
            this.direction = 1;
        }
    }

}