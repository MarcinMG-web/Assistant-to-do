//Show task
function showTasks()
{
    tasks.forEach(function(title) // przegląd tablicy tasks i wybranie pojedyńczego elementu 
    {
        addNewTask(title); // przesłanie tytułu do funkcji addNewTask
        
    }); 
}


// Toggle complet
function toggleTaskComplete(task)
{
    task.classList.toggle('btn-success');
}


// Delete task
function deleteTask(task)
{
    const liToDelite = task.closest('li');

    task.closest('ul').removeChild(liToDelite);


}

