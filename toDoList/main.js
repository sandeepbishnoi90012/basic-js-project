window.addEventListener("load", () => {

  let form_input = document.getElementById("form_input");
  let form_submit = document.getElementById("form_submit");
  let task_list = document.getElementById("tasks");





  form_submit.addEventListener("click", (e) => {
    e.preventDefault();
    
    let task = form_input.value;
    form_input.value = '';

    //creating a new task container
    let new_task = document.createElement('div');
    new_task.setAttribute('id','task');
    
    //creating input of the new_task
    let new_task_input = document.createElement('input');
    new_task_input.type = 'text'
    new_task_input.setAttribute('id','content');
    new_task_input.setAttribute('readonly','readonly');
    new_task_input.value = task;
    

    //add input to task
    new_task.appendChild(new_task_input);
    

    //creating action div
    let action = document.createElement('div');
    action.classList.add('action');

    //creating button
    let edit = document.createElement('button');
        edit.setAttribute('id','edit')
        edit.innerText = 'edit';

    let  delete_btn = document.createElement('button');
        delete_btn.setAttribute('id','delete')
        delete_btn.innerText = 'delete';

        action.appendChild(edit)
        action.appendChild(delete_btn);
        

        //adding action to new_task
        new_task.appendChild(action);

        //adding new_task to task_list
        task_list.appendChild(new_task);
        edit.addEventListener('click',()=>{
            if(edit.innerText == 'edit'){
                new_task_input.removeAttribute('readonly');
                edit.innerText = 'save';
                edit.style.opacity = 0.8;
                
            }
            else{
                edit.innerText = 'edit'
                new_task_input.setAttribute('readonly','readonly');
                edit.style.opacity = 1;
            }   
        })
    delete_btn.addEventListener('click',()=>{
        task_list.removeChild(new_task);
    })

    });

});
