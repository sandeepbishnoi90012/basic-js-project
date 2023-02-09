const imgs = document.querySelectorAll('.img')
let counter =0;
console.log(imgs)
imgs.forEach((img,index) => {
    img.style.left = `${index * 100}%`
    console.log(img)
});

const imgslide = ()=>{
    imgs.forEach((img)=>{
        if(counter < 4 && counter > (-4)){
        img.style.transform = `translateX(${counter * 100}%)`
        }
    })
}
const goPrev =()=>{
    counter++;
    imgslide();
}
const goNext =()=>{
    counter--;
    imgslide();
}