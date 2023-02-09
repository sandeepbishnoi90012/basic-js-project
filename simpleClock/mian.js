setInterval(() => {
  let date = new Date();
  let minute = date.getMinutes();
  let hours = date.getHours();
  let seconds = date.getSeconds();


  document.getElementById('hours').style.transform = `rotate(${30*hours +minute/2}deg)`;
    
  document.getElementById('minutes').style.transform = `rotate(${6*minute}deg)`;
    
  document.getElementById('seconds').style.transform = `rotate(${6*seconds}deg)`;
    
}, 1000);


//code of digital clock

setInterval(()=>{
    let date = new Date();
    let minute = date.getMinutes();
    let hours = date.getHours();
    let seconds = date.getSeconds();
    document.getElementById('info').innerText = `${hours} : ${minute} : ${seconds}`
},1000)
