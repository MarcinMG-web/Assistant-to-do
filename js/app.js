// Variables
const newTaskForm = document.querySelector('.new-task-container form'); 
const tasksContainer = document.querySelector('.tasks-container ul');


// On DOM load
document.addEventListener('DOMContentLoaded', function() 
{
    bindAddTaskEvents();
    showTasks(); 

});

