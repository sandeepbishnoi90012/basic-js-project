let reset  = document.getElementById('reset');
let ans  = document.getElementById('display')
let result = document.getElementById('result');
const boxex = document.querySelectorAll('.box');
const colorBox = document.getElementsByClassName('colors')[0];



//genrate random color
function colorGenrator (){
    Array.from(boxex).forEach((ele)=>{
        ele.style.backgroundColor = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;
    })
}
colorGenrator();


//insert value in result
result.innerText = Array.from(boxex)[Math.floor(Math.random()*6)].style.backgroundColor;

// check color in box
function checkColor(){
    Array.from(boxex).forEach((ele)=>{
        ele.addEventListener('click',()=>{
         
            if(ele.style.backgroundColor == result.innerText){
                ans.innerText = 'Answer is right'
                colorBox.style.backgroundColor = ele.style.backgroundColor;
                Array.from(boxex).forEach((ele)=>{
                    ele.style.backgroundColor = result.innerText
                })
            }
            else{
               if(ans.innerText.toString().includes('Wrong')){

               }
               else{
                ans.innerText += ' wrong';
               }
               
            }
        })
    })
}
checkColor();




//reset functionally
reset.addEventListener('click',()=>{
    location = location.href
})