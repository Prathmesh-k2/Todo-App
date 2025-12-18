// get elements
let addBtn = document.getElementById("btn1");
let todoInput = document.getElementById("2");
let todoList = document.getElementById("todoList");

// add todo on button click
addBtn.addEventListener("click", function () {
    let todoText = todoInput.value.trim();

    // validation
    if (todoText === "") {
        alert("Please enter a todo!");
        return;
    }

    // create li
    let li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.textContent = todoText;

    // create delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "btn btn-danger btn-sm";

    // delete functionality
    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(deleteBtn);
    todoList.appendChild(li);

    // clear input
    todoInput.value = "";
});
