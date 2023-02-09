let mainbox = document.getElementById('mainbox')

document.getElementById('btn').addEventListener('click',()=>{
    let paraNo = document.getElementById('input').value;
    for(let i = 1;i <= paraNo;i++){
        let p =  document.createElement('p')
        p.classList.add('parabox');
        p.innerText = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime id, quibusdam eius deserunt molestiae deleniti labore necessitatibus, exercitationem sunt odit perferendis laborum ullam sed quam ab hic commodi? Molestiae odit deleniti ipsa ipsam totam molestias psum dolor sit amet consectetur, adipisicing elit. Maxime id, quibusdam eius deserunt molestiae deleniti labore necessitatibus, exercitationem sunt odit perferendis laborum ullam sed quam ab hic commodi? Molestiae odit deleniti ipsa ipsam totam molestias psum dolor sit amet consectetur, adipisicing elit. Maxime id, quibusdam eius deserunt molestiae deleniti labore necessitatibus, exercitationem sunt odit perferendis laborum ullam sed quam ab hic commodi? Molestiae odit deleniti ipsa ipsam totam molestias`
       mainbox.append(p)
       console.log(mainbox)
    }
})