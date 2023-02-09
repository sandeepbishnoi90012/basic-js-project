let index = 0;


document.getElementsByTagName('button')[0].addEventListener('click',()=>{
    index++;
   //creating a new notebox
   let notebox = document.createElement('div')
   notebox.classList.add('notebox')

   //creating action action
   let action = document.createElement('div')
   action.classList.add('action')
   //set in notebox
   notebox.appendChild(action)

   //creating i tag 
   let i1 = document.createElement('i')
   i1.classList.add('bi','bi-save2','save')

   let i2 = document.createElement('i')
   i2.classList.add('bi','bi-trash-fill','delete')
   //add to action
   action.appendChild(i1);
   action.appendChild(i2);
   
   //creating textarea
   let textarea = document.createElement('textarea')
   textarea.classList.add('textarea')
   //add to notebox
   notebox.appendChild(textarea)
   document.getElementsByClassName('maincontainer')[0].appendChild(notebox)
   console.log(notebox)
   document.getElementsByClassName('delete')[index].addEventListener('click',()=>{
       document.getElementsByClassName("maincontainer")[0].removeChild(notebox)
       index--;
   })
})


