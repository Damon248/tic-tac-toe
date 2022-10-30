console.log("welcome to tic tac toe");

let turnmusic = new Audio("D:\my work\JS\projects\tic tac toe\assests\sounds\lichess_move.mp3")
let gameover = new Audio("./assests/sounds/mixkit-retro-arcade-game-over-470.wav")
let gameTied = new Audio("./assests/sounds/match tied.mp3")
let wrongInput = new Audio("./assests/sounds/negative_beeps-6008.mp3")
let turn = "X"
let count = 0

// function to change the turn 
const changeTurn = () => {
    if(turn==='X'){
        turn='O'
    }else {
        turn='X'
    }
}

// function to check for the victory
const checkWin = () => {
    if(
        boxes[0].innerText===boxes[1].innerText && boxes[1].innerText === boxes[2].innerText && boxes[0].innerText!==''
        ||
        boxes[3].innerText===boxes[4].innerText && boxes[4].innerText === boxes[5].innerText && boxes[3].innerText!==''
        ||
        boxes[6].innerText===boxes[7].innerText && boxes[7].innerText === boxes[8].innerText && boxes[6].innerText!==''
        ||
        boxes[0].innerText===boxes[3].innerText && boxes[3].innerText === boxes[6].innerText && boxes[0].innerText!==''
        ||
        boxes[1].innerText===boxes[4].innerText && boxes[4].innerText === boxes[7].innerText && boxes[1].innerText!==''
        ||
        boxes[2].innerText===boxes[5].innerText && boxes[5].innerText === boxes[8].innerText && boxes[2].innerText!==''
        ||
        boxes[0].innerText===boxes[4].innerText && boxes[4].innerText === boxes[8].innerText && boxes[0].innerText!==''
        ||
        boxes[2].innerText===boxes[4].innerText && boxes[4].innerText === boxes[6].innerText && boxes[2].innerText!==''
        ){
        return 1;
    }
    else{
        return 0;
    }
}

//function to check draw

let checkDraw = () =>{
    if(count===9){
        gameTied.play()
        swal({title: "Oops!!!", text: "game tied!", type: "success", button: "restart"}).then(function(){
            location.reload();
            }
        );
    }
    else{
        info.innerText = "Turn for " + turn
        turnmusic.play()
    }
}

// main logic

let boxes = document.getElementsByClassName("box")
const [info] = document.getElementsByClassName("info")


Array.from(boxes).forEach(element => {
    let [boxtext] = element.getElementsByClassName("boxtext")
    element.addEventListener('click', () => {
        if(boxtext.innerText === ''){
            boxtext.innerText = turn
            const won = checkWin()
            if(won===1){
                if(turn === 'X'){
                    document.querySelector('.imgX').getElementsByTagName('img')[0].style.height = '400px'
                    document.querySelector('.imgX').getElementsByTagName('h3')[0].style.fontSize = '30px'
                }
                else{
                    document.querySelector('.imgO').getElementsByTagName('img')[0].style.height = '400px'
                    document.querySelector('.imgO').getElementsByTagName('h3')[0].style.fontSize = '30px'
                }
                gameover.play()
                info.innerText = turn + " won the game!"
                swal({title: "Congratulations✨", text: turn+" won the game!", type: "success", button: "restart"}).then(function(){
                    location.reload();
                    }
                );
            }
            else{
                changeTurn()
                count ++
                checkDraw()
            }
        }
        else{
            swal("this place is already filled!");
            wrongInput.play()
        }
    })
})

