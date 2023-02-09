const squares = document.querySelectorAll(".square");
const colors = [];
let regenrate = document.getElementById('regenrate')
let result = document.getElementById('result');
let correct = document.getElementById('correct');

//=======regenrate========
regenrate.addEventListener('click',()=>{
setTimeout(()=>{
randomColorGenrator();
},0)
})

function randomColorGenrator() {
    for (let i = 0; i < squares.length; i++) {
      colors.push(
        `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
          Math.random() * 255
        )},${Math.floor(Math.random() * 255)})`
      );
    }
  }
  randomColorGenrator();

  //set color to square
  colors.forEach((color,index)=>{
    squares[index].style.backgroundColor = color;
  });

  //set result
result.innerText = colors[Math.floor(Math.random()*squares.length)]


colors.forEach((value,index)=>{
    
    squares[index].addEventListener('click',()=>{
        if(value == result.innerText){
           correct.innerText = "answer is correct";
           regenrate.innerText = "Play Again"
           for(i=0;i<squares.length;i++){
            squares[i].style.backgroundColor = value;
           }
          document.getElementById('header').style.backgroundColor = value;
        }  
        else{
            squares[index].style.backgroundColor = "transparent"
            correct.innerText = "answer is wrong"
        }
    })
})
//=======regenrate========
regenrate.onclick = ()=>{
  location = location.href
}
//generate random color

