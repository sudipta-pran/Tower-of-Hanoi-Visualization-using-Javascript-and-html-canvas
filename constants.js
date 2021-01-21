const PIPE_WIDTH =  10
const PIPE_HEIGHT = 200
let STATE_MOVING = false
const positions = {
    bottom:{
        first: 390,
        second: 380,
        third: 370,
        fourth: 360,
        fifth: 350
    },
    left: {
        first: 100,
        second: 300,
        third: 480
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}