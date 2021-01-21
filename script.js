async function hanoi(stack, source, destination, spare){
    if(stack.length === 1){
        while(STATE_MOVING){
            //Do nothing    
            await sleep(1)
        }
        await movePlate(stack[0], destination)
    } else {
        const newStack = stack.slice(0,1);
        const [last, ...rest] = stack;
        hanoi(rest, source, spare, destination);
        hanoi(newStack, source, destination, spare);
        hanoi(rest, spare, destination, source);
    }
}

const moveBtn3 = document.getElementById('moveBtn3')
const moveBtn4 = document.getElementById('moveBtn4')
const moveBtn5 = document.getElementById('moveBtn5')

moveBtn3.addEventListener('click', start3 )
moveBtn4.addEventListener('click', start4 )
moveBtn5.addEventListener('click', start5 )

function start3(){    
    moveBtn3.removeEventListener('click', start3)
    moveBtn4.removeEventListener('click', start4)
    moveBtn5.removeEventListener('click', start5)
    const plates = [p3, p2, p1]
    hanoi(plates, pipe1, pipe3, pipe2)
}

function start4(){    
    moveBtn3.removeEventListener('click', start3)
    moveBtn4.removeEventListener('click', start4)
    moveBtn5.removeEventListener('click', start5)
    const plates = [p4, p3, p2, p1]
    hanoi(plates, pipe1, pipe3, pipe2)
}

function start5(){    
    moveBtn3.removeEventListener('click', start3)
    moveBtn4.removeEventListener('click', start4)
    moveBtn5.removeEventListener('click', start5)
    const plates = [p5, p4, p3, p2, p1]
    hanoi(plates, pipe1, pipe3, pipe2)
}




// async function hanoi(){
//     moveBtn.removeEventListener('click', hanoi)
//     await movePlate(p1, pipe3)
//     await movePlate(p2, pipe2)
//     await movePlate(p1, pipe2)
//     await movePlate(p3, pipe3)
//     await movePlate(p1, pipe1)
//     await movePlate(p2, pipe3)
//     await movePlate(p1, pipe3)
// }