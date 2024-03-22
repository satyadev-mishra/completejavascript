const todoForm = document.querySelector(".todo-form");
const taskValue = document.querySelector("#taskValue");
const taskLists = document.querySelector(".tasks-list");
// console.log(taskInputField);
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let newTask = taskValue.value;
  e.target.reset();
  const newTaskList = document.createElement("li");
  let taskInnerHTML = `<span class="taskText">${newTask}</span>
          <div class="btnGroup">
            <button type="button" class="btn done">Done</button>
             <button type="button" class="btn edit">Edit</button>
            <button type="button" class="btn delete">Delete</button> 
        </div>`;
  newTaskList.innerHTML = taskInnerHTML;
  taskLists.append(newTaskList);
});

taskLists.addEventListener("click", (e) => {
  if (e.target.classList.contains("done")) {
    const taskDone = e.target.parentNode.previousElementSibling;
    taskDone.classList.add("taskDone");
  }
  if (e.target.classList.contains("delete")) {
    const taskDelete = e.target.parentNode.parentNode;
    taskDelete.remove();
    // taskDone.classList.add("taskDone");
  }
  //   if (e.target.classList.contains("edit")) {
  //     const taskDone = e.target.parentNode.previousElementSibling;
  //     taskDone.classList.remove("taskDone");
  //     taskDone.setAttribute("contenteditable", "true");
  //     // taskDone.classList.add("taskDone");
  //   }
});
