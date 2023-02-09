
    let MI  =  ;
    let IP  = document.getElementsByTagName('input')[1].value;
    let  R = document.getElementsByTagName('input')[2].value;

    console.log(IP);
    console.log(R);
    let ammount = document.getElementById('ammount')
    let amm = MI * 12 * IP;

    
    let value =document.getElementById('Value')
    let Fp = (MI * Math.pow((1 + R/12/100),(12 * IP)))

    let gain = document.getElementById('gain');
    let Gain = Fp - amm;


document.getElementById('submit').addEventListener('click',()=>{
    ammount.innerText += amm;
    value.innerText += Fp;
    gain,innerText += Gain;

})
console.log('thiedfi')



