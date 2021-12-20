//SELECTORS
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
// const trashButton = document.querySelector(".trash-btn");
//EVENT LISTENERS
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
//FUNCTIONS
function addTodo(event) {
  //Prevent form fro submitting
  event.preventDefault();
  // console.log("hello");
  //GENERATING HTML TEMPLATES
  //TODO DIV
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //CREATE  LI
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  //CHECK BUTTON
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<li class="fas fa-check"></li>';
  completedButton.classList.add("completed-btn");
  todoDiv.appendChild(completedButton);
  //CREATE TRASH BUTTON
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<li class="fas fa-trash"></li>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  //APPEND TO LIST
  todoList.appendChild(todoDiv);
  // CLEAR TODOLIST VALUE ON ADDING
  todoInput.value = "";
}

function deleteCheck(e) {
  // console.log(e.target);
  const item = e.target;
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    //ANIMATION
    todo.classList.add("fall");

    todo.addEventListener("transitionend", function () {
      // todo.remove();
    });
    // console.log(todo);
  }
  if (item.classList[0] === "completed-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
