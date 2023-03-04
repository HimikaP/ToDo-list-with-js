function addItem(){
    let x = document.getElementById("inputIt").value;
    const todo = document.createElement("p");
    todo.innerHTML = x;
    document.getElementById("todo-container").appendChild(todo);
}