const questions = [
    [],
    {
        question: '1) Which is the following is a markup language?',
        op1 :'HTML',
        op2:'CSS',
        op3:'JavaScript',
        op4:'PHP',
        answer:'HTML'
    },
    {
        question: '1) What is CSS?',
        op1 :'HTML',
        op2:'CSS',
        op3:'JavaScript',
        op4:'PHP',
        answer:'CSS'
    },
    {
        question: '1) What is JS?',
        op1 : 'HTML',
        op2:'CSS',
        op3:'JavaScript',
        op4:'PHP',
        answer:'JavaScript'
    },
];


let ques = document.getElementsByClassName('quesbox')[0];
let submitBtn = document.getElementById('submitBtn');
let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let option4 = document.getElementById("option4");
let index = 1;
toatal = 4;
right = 0;

submitBtn.addEventListener('click',()=>{
    changeQuestion();
})



changeQuestion = ()=>{
    if(index == toatal){
       return endQuestion();
    }
    ques.innerText = questions[index].question
    option1.innerText = questions[index].op1
    option2.innerText = questions[index].op2
    option3.innerText = questions[index].op3
    option4.innerText = questions[index].op4;

    chechAns();
    index++
}



 function endQuestion() {
    document.getElementById("main").innerHTML =`
    <h2 class = "quesbox">thank you </h2>
    <h2 class = "quesbox">${right}/${toatal} is right<h2>
    `;
 }

 function chechAns(){
    Array.from(document.querySelectorAll('input')).forEach((e)=>{
        if(e.checked){
            console.log(e.nextElementSibling.innerText)
            console.log(questions[index].answer)
            if(e.nextElementSibling.innerText == questions[index].answer){
            right++;
        }       
        }
    })
 }
