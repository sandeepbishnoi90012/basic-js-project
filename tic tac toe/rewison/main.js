let turn = 'X'
let boxex = document.getElementsByClassName('box');
// console.log(boxex)
let reset = document.getElementById('reset')
let result = document.getElementById('result');
let isgameOver = false;

//function to change the turn
function changeTurn(){
    return turn == 'X'?'0':'X';
}

//function to check win
function checkWin(){
    const poss = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ] 
    poss.forEach((e)=>{
        if((boxex[e[0]].innerText == boxex[e[1]].innerText) && (boxex[e[1]].innerText == boxex[e[2]].innerText) && (boxex[e[0]].innerText !== '')){
            result.innerText = `${turn} WON`
            isgameOver = true;
        }
    })
}


//function to fill the boxex
function tofill(){
    Array.from(boxex).forEach((ele)=>{
        ele.addEventListener('click',()=>{
            // console.log(ele.style)
            ele.innerText += turn;
            checkWin();
            if(!isgameOver){
                turn = changeTurn();
                result.innerHTML = `Turn of ${turn}`
            }
        })
    })
}
tofill();

//reset
reset.addEventListener('click',()=>{
    location = location.href;
})