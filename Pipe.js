class Pipe{
    constructor(xPosition){
        this.x = xPosition
        this.stack = 0
    }

    drawPipe(){        
        ctx.fillStyle = 'yellow'
        ctx.fillRect(this.x, 200, PIPE_WIDTH, PIPE_HEIGHT)
    }
}