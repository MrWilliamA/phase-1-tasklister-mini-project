document.addEventListener("DOMContentLoaded", () => {

  const getlist = document.querySelector("#tasks");
  const form = document.getElementById('create-task-form');
  const submitBtn = document.querySelector('input[type=submit]');


  function createPriority() {
    const priorities = ["high", "medium", "low"];
     const selectBox = document.createElement("select");
     selectBox.id = "selectBox";
     form.insertBefore(selectBox, submitBtn);

     for(var i = 0; i < priorities.length; i++) {
      let opt = priorities[i];
      let el = document.createElement("option");
      el.textContent = opt;
      el.value = opt;
      selectBox.appendChild(el);
  }

  }
  createPriority();

    function logSubmit(event) {
      event.preventDefault();
      const makeLi = document.createElement('li');
      let inputContent = document.getElementById('new-task-description').value;
      let priorityContent = document.getElementById('selectBox').value;
      makeLi.append(`${inputContent} - ${priorityContent}`);
      makeLi.className = `${priorityContent}`;
      makeLi.contentEditable = true;

      const makeBtn = document.createElement('button');
      makeBtn.textContent = "Delete";
      makeBtn.style.padding = "2px 5px";
      makeBtn.style.marginLeft = "5px";
      makeBtn.style.fontSize = "12px";
      makeBtn.className = "deleteBtn";

      makeLi.append(makeBtn);

      getlist.append(makeLi);

      deletingFunc();
    
    }


  
    form.addEventListener('submit', logSubmit);


    const deleteBtn = document.getElementsByClassName('deleteBtn');

function deletingFunc() {
    for (var i = 0 ; i < deleteBtn.length; i++) {
      deleteBtn[i].addEventListener('click' , function(e) {
          this.parentNode.remove();
        
      } ) ; 
   }
  }

});
