const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const pipe1 = new Pipe(positions.left.first)
const pipe2 = new Pipe(positions.left.second)
const pipe3 = new Pipe(positions.left.third)

const p1 = new Plate((positions.left.first - (25 - PIPE_WIDTH/2)), 
                        positions.bottom.fifth, 50, 10, pipe1)
const p2 = new Plate((positions.left.first - (35 - PIPE_WIDTH/2)), 
                        positions.bottom.fourth, 70, 10, pipe1)
const p3 = new Plate((positions.left.first - (45 - PIPE_WIDTH/2)), 
                        positions.bottom.third, 90, 10, pipe1)
const p4 = new Plate((positions.left.first - (55 - PIPE_WIDTH/2)), 
                        positions.bottom.second, 110, 10, pipe1)
const p5 = new Plate((positions.left.first - (65 - PIPE_WIDTH/2)), 
                        positions.bottom.first, 130, 10, pipe1)
pipe1.stack = 5


function clear(){
    // Clear the canvas
    ctx.fillStyle = 'green';
    ctx.fillRect(0, 0, 600, 400);
}

async function movePlate(plate, pipe){
    STATE_MOVING = true
    plate.pipe.stack--
    //plate y to 100
    while(plate.y !== 180){
        plate.y--
        await sleep(1)
    }

    const translateX = plate.x < pipe.x - (plate.width - PIPE_WIDTH)/2 ? 1 : -1
    while(plate.x !== pipe.x - (plate.width - PIPE_WIDTH)/2){
        plate.x = plate.x + translateX
        await sleep(1)
    }

    while(plate.y !== 390 - (pipe.stack * 10)){
        plate.y++
        await sleep(1)
    }
    plate.pipe = pipe
    pipe.stack++
    return new Promise(resolve => {
        STATE_MOVING = false
        return resolve
    })
}

function update(){
    clear()
    // Towers
    pipe1.drawPipe()
    pipe2.drawPipe()
    pipe3.drawPipe()
    //Plates
    p1.drawPlate()
    p2.drawPlate()
    p3.drawPlate()
    p4.drawPlate()
    p5.drawPlate()
    requestAnimationFrame(update)
}

requestAnimationFrame(update)


