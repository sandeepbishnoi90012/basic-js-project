let turn = 'X';
const box = document.getElementsByClassName('box');
let isGameOver = false;
const reset = document.getElementById('reset');

changeTurn = ()=>{
    return turn === 'X'?'0':'X';
}


//checkwin function
function checkwin(){
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
    boxtext = document.getElementsByClassName('boxtext');
    poss.forEach((e)=>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) &&(boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== "")){
            isGameOver = true;
            document.getElementsByClassName('info')[0].innerText = `${turn} WON`

            Array.from(boxtext).forEach((ele)=>{
                ele.innerText = turn;
            })
        }
    })
}



Array.from(box).forEach((ele,index)=>{
    // console.log(ele);
    let boxtext =  document.getElementsByTagName('span')[index];
    // console.log(boxtext)
    ele.addEventListener('click',function (){
        boxtext.innerText = turn;
        checkwin();
        if(!isGameOver){
            turn =  changeTurn();
            document.getElementsByClassName('info')[0].innerText = "TURN OF " + turn;
        }
    })
})




//reset function
reset.addEventListener('click',()=>{
    boxtext = document.getElementsByClassName('boxtext');
    Array.from(boxtext).forEach((ele)=>{
        ele.innerText = "";
    })
    isGameOver = false;
    document.getElementsByClassName('info')[0].innerText = "TURN OF X";
    turn  = 'X';
})
