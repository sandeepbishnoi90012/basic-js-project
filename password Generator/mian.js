const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = upperSet.toLowerCase();
const numberSet = "1234567890";
const symbolsSet = "!@#$%^&*()_+";
let password = "";


const passLen = document.getElementById("passwordLength").value;
console.log(passLen)
const upper = document.getElementById("uppercase");
const lower = document.getElementById("lowercase");
const number = document.getElementById("numbers");
const symnbol = document.getElementById("symbols");
const submit = document.getElementById("submit");
const result = document.getElementById("result");


function passwordGenrator (password) {
    if(upper.checked){
        password +=  randomGenreator(upperSet);
        
    }
    if(lower.checked){
        password +=  randomGenreator(lowerSet);
    }
    if(number.checked){
        password +=  randomGenreator(numberSet);
    }
    if(symnbol.checked){
        password +=  randomGenreator(symbolsSet);
    }
    if(password.length < passLen){
        console.log('pass less')
        password = passwordGenrator(password);
    }
    if(password.length >= passLen){
        return password;
    }
};


submit.addEventListener("click", () => {
    
    result.value  =  passwordGenrator(password);
 
});
const randomGenreator = (set) => {
  return set[Math.floor(Math.random() * set.length)];
};