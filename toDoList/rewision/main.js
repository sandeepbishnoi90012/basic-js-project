window.addEventListener('load',()=>{
    console.log('hello');


  document.getElementById('form_submit').addEventListener('click',(e)=>{
   let form_input = document.getElementById('form_input');
   let task = form_input.value;
   console.log(task)
  form_input.value = '';   


   let task_list =  document.getElementById('tasks');
   let task_container = document.createElement('div')
   task_container.classList.add('task');
   task_list.appendChild(task_container);

    let new_task = document.createElement('input');
    new_task.classList.add('task_contnt');
    new_task.setAttribute('readonly','');
    new_task.type = 'text'
    new_task.value  = task;
    task_container.appendChild(new_task);

    let edit = document.getElementsByClassName('edit')[0];
    let delete_tsk = document.getElementsByClassName('delete')[0];
    task_container.appendChild(edit);
    task_container.appendChild(delete_tsk)
    edit.addEventListener('click',()=>{
        if(edit.innerText == 'Edit'){
            new_task.removeAttribute('readonly');
            edit.innerText = 'Save'
        }
        else{
            new_task.setAttribute('readonly','');
            edit.innerText = 'edit'
        }
    })

    delete_tsk.addEventListener('click',()=>{
        task_list.removeChild(task_container)
    })
  })  
})