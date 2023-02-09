window.addEventListener('load',()=>{
    function randomColor() {
        return `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`
    }
    document.getElementsByTagName('button')[0].addEventListener('click',()=>{
        document.getElementById('color').innerText = randomColor();
        document.body.style.backgroundColor = document.getElementById('color').innerText;
       

    })
})