const canvas = document.querySelector('#game')
const game = canvas.getContext('2d');

let canvasSize 
let canvasElement

window.addEventListener('load', setCanvasSize)
window.addEventListener('resize', setCanvasSize)

function setCanvasSize(){

    if (window.innerHeight < window.innerWidth) {
        canvasSize = window.innerHeight * 0.8;
    } else {
        canvasSize = window.innerWidth * 0.8
    }
    canvas.setAttribute('width', canvasSize)
    canvas.setAttribute('height', canvasSize)
    
    
    startGame()
}

function startGame(){
    canvasElement = (canvasSize / 10) -1
    game.font = canvasElement + 'px verdanas'

    const map = maps[0]
    const mapRows = map.trim().split('\n');
    const mapRowCols = mapRows.map(row => row.trim().split(''));

    for (let w = 1; w <= 10; w++) {
        for (let h = 0; h < 10; h++) {
            game.fillText(emojis[mapRowCols[w-1][h]], canvasElement * h, canvasElement * w) 
        }
    }
  
}