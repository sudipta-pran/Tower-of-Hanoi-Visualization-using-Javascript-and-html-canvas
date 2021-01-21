class Plate{
    constructor(x,y,w,h,pipe){
        this.width = w
        this.height = h
        this.x = x
        this.y = y
        this.pipe = pipe
    }

    updateLocation(){
        //move plates
    }

    drawPlate(){
        //Draw plate
        ctx.fillStyle = 'yellow'
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}