function addNewTask(title) // pobranie tytułu jako parametr
{
    const taskLi = document.createElement('li'); 

    taskLi.classList.add('single-class'); // doddanie do li classy single-class w css
    taskLi.innerHTML = prepareTaskHTML(title); // podmianka wewnętrznego html dla stowrzonego zadania ()

        
    // Event -toggle and delete

    const toggleCompleteBtn = taskLi.querySelector('.toggle-complete-btn');// przycisk do przełączania zadania wykoannnego
    const deleteBtn = taskLi.querySelector('.delete-task-btn'); // przycisk do usuwania zadania 

    toggleCompleteBtn.addEventListener('click',function()
    {
        toggleTaskComplete(this);
        this.style.backgroundColor = "#387522";
         
    });

    deleteBtn.addEventListener('click', function()
    {
        deleteTask(this);
    });

    // Add task to DOM
    tasksContainer.appendChild(taskLi);
   
    
}

function prepareTaskHTML(title)
{  
    return '<div class="input-grup">' +
                                    
                    '<span class="input-group-btn">' +
                            '<button class="btn btn-default toggle-complete-btn"><i class="fa fa-check"></i></button>' +
                    '</span>' +

                            '<input type="text" class="form-control" placeholder="Tytuł zadania ..." value="'+ title +'">' +
                    
                    '<span class="input-group-btn">' +
                            '<button class="btn btn-danger delete-task-btn"><i class="fa fa-times"></i></button>'+
                    '</span>' + 
            '</div>' ;   

           
}

// Add new task events

function bindAddTaskEvents()
{
        // On submit
        newTaskForm.addEventListener('submit', function(events)
        {
                events.preventDefault();// zapobiega przeładowaniu sie strony

                const title = this.querySelector('input').value;

                

                if (title) // wykona się jeżeli  title będie miał jakś wartość 
                {
                  addNewTask(title);
                                      
                 
                };
                
        } ) ;
        
}

