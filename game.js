// JavaScript source code
class Balloon {
    constructor() {
        this.x = random(width)
        this.y = random(height)
        this.w = 25
        this.h = 35
        this.vx = 0
        this.vy = 0

        this.col = color(random(255), random(255), random(255))
        this.popped = false;
    }

    blowAway() {
        if (!this.popped) {
            //calculate the blow away force    
            let d = dist(this.x, this.y, mouseX, mouseY)
            let force = d < height / 2 ? -10 / (d * d) : 0

            //apply the force to the existing velocity   
            this.vx += force * (mouseX - this.x)
            this.vy += force * (mouseY - this.y)
        }
        

        //also add some friction to take energy out of the system 
        this.vx *= 0.95
        this.vy *= 0.95

        //update the position   
        this.x += this.vx
        this.y += this.vy
    }

    checkBounds() {
        //make balloon wrap to the other side of the canvas 
        if (this.x < 0) this.x = width
        if (this.x > width) this.x = 0
        if (this.y < 0) this.y = height
        if (this.y > height) this.y = 0
    }

    checkToPop() {
        if (!this.popped && dist(this.x, this.y, mouseX, mouseY) < this.h) {
            this.popped = true
            let currScore = Number(document.getElementById("score").innerHTML)
            currScore++
            document.getElementById("score").innerHTML = currScore
            this.col = color(156)
        }
    }
}

class GameCursor {
    constructor() {
        this.x = mouseX
        this.y = mouseY
        this.r = 15
        this.color = color(255,0,0)
    }
}

let NUM_OF_BALLOONS = 20
let balloons = []

function restartWithScore(){
    NUM_OF_BALLOONS = 0
    NUM_OF_BALLOONS = 20
    for (let i = 0; i < NUM_OF_BALLOONS; i++) {
        balloons[i] = new Balloon()
    }
}

function restartWithoutScore() {
    NUM_OF_BALLOONS = 0
    NUM_OF_BALLOONS = 20
    document.getElementById("score").innerHTML = 0
    for (let i = 0; i < NUM_OF_BALLOONS; i++) {
        balloons[i] = new Balloon()
    }
    
}

function setup() {
    let canvas = createCanvas(640, 480)
    canvas.parent("gameContainer")

    for (let i = 0; i < NUM_OF_BALLOONS; i++) {
        balloons[i] = new Balloon()
    }

    //noCursor()
    gameCursor = new GameCursor()
}



function draw() {
    //a nice sky blue background    
    background(135, 206, 235)
    for (let i = 0; i < NUM_OF_BALLOONS; i++) {
        fill(balloons[i].col)
        ellipse(balloons[i].x, balloons[i].y, balloons[i].w, balloons[i].h)
        balloons[i].blowAway()
        balloons[i].checkBounds()
        balloons[i].checkToPop()
    }
}