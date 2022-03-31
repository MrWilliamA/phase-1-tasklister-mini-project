import Task from "./task.js";

class TaskList {
    // this class should have all the tasks
    constructor(){
      this.tasks = []
    }  

    // create tasks
    createTask(description) {
      const tempTask = new Task(description)
      this.tasks.push(tempTask)
    }

    // delete
    deleteTask() {
      console.log('DELETE TASK functionality not yet implemented');
    }

    // render/createHTML to be shown on screen/user

    renderTasks() {
      // loop through the tasks array and prepare HTML
      let htmlString = ''
      for(let task of this.tasks){
        htmlString += `<li>${task.render()}</li>`
      }

      return htmlString
    }

  }

  export default TaskList;