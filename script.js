const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const errorMessage = document.getElementById("error-message");

todoForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const taskText = todoInput.value.trim();

  if (taskText === "") {
    errorMessage.textContent = "Please enter a task.";
    return;
  }

  errorMessage.textContent = "";
  addTodoItem(taskText);
  todoInput.value = "";
  todoInput.focus();
});

function addTodoItem(taskText) {
  // <li class="todo-item">
  const listItem = document.createElement("li");
  listItem.className = "todo-item";

  // <span class="todo-text">taskText</span>
  const textSpan = document.createElement("span");
  textSpan.className = "todo-text";
  textSpan.textContent = taskText;

  // actions wrapper
  const actionsDiv = document.createElement("div");
  actionsDiv.className = "todo-actions";

  // complete button
  const completeButton = document.createElement("button");
  completeButton.className = "action-btn";
  completeButton.textContent = "Done";

  completeButton.addEventListener("click", function () {
    listItem.classList.toggle("completed");
  });

  // delete button
  const deleteButton = document.createElement("button");
  deleteButton.className = "action-btn";
  deleteButton.textContent = "Delete";

  deleteButton.addEventListener("click", function () {
    listItem.remove();
  });

  // assemble
  actionsDiv.appendChild(completeButton);
  actionsDiv.appendChild(deleteButton);

  listItem.appendChild(textSpan);
  listItem.appendChild(actionsDiv);

  todoList.appendChild(listItem);
}