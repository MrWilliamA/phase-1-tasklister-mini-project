import TaskList from "./taskList.js";

document.addEventListener('DOMContentLoaded', () => {
    // your code here
  
    let tl = new TaskList()
  
    taskForm = document.getElementById('create-task-form')
    descInput = document.getElementById('new-task-description')
    taskUl = document.getElementById('tasks')
  
    taskForm.addEventListener('submit',(event) => {
      event.preventDefault();
      // call create new task
      tl.createTask(descInput.value)
      taskForm.reset()
      taskUl.innerHTML = tl.renderTasks()
    })
  });