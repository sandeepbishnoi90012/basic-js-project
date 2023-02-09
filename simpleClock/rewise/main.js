window.addEventListener('load',()=>{
    // console.log(minutes,hours,seconds);
    
    let min_key = document.getElementById('min_key')
    let sec_key = document.getElementById('sec_key')
    let hour_key = document.getElementById('hour_key')
    setInterval(()=>{
       date = new Date()
       let minutes = date.getMinutes();
       let seconds = date.getSeconds();
       let hours = date.getHours();
    min_key.style.transform = `rotate(${6 *  minutes}deg)`
    sec_key.style.transform = `rotate(${6 *  seconds}deg)`
    hour_key.style.transform = `rotate((${30 *  hours} + ${minutes/2}) deg)`

    document.querySelector('main').innerText = `${hours}:${minutes}:${seconds}`
   },1000)

})