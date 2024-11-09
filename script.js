// script.js
let todos = [];

function addTodo() {
    const input = document.getElementById('todo-input');
    const task = input.value.trim();

    if (task) {
        todos.push({ text: task, completed: false });
        input.value = '';
        render();
    }
}

function toggleTodo(index) {
    todos[index].completed = !todos[index].completed;
    render();
}

function deleteTodo(index) {
    todos.splice(index, 1);
    render();
}

function render() {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';

    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.className = todo.completed ? 'completed' : '';
        li.textContent = todo.text;
        li.onclick = () => toggleTodo(index);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.onclick = (e) => {
            e.stopPropagation();
            deleteTodo(index);
        };

        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    });
}
