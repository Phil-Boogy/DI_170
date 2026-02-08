const tasks = [];
const ToDoList = document.getElementById('listTasks');
const form = document.getElementById('taskForm');

form.addEventListener("submit", addTask);
function addTask(e) {
    e.preventDefault();

    const taskDiv = document.createElement('div');
    const checkbox = document.createElement('input');
    const label = document.createElement('label');
    const button = document.createElement('button');
    const userTask = document.getElementById('taskInput').value;


    checkbox.type = 'checkbox';
    button.textContent = '🗑️';
    taskDiv.className = 'task-item';
    label.textContent = userTask

    if (userTask.trim().length > 0) {
        tasks.push(userTask);
        // newTask.appendChild(taskDiv)
        taskDiv.appendChild(checkbox);
        taskDiv.appendChild(label);
        taskDiv.appendChild(button);
        ToDoList.appendChild(taskDiv);
    } else {
        alert('Add a valid item')

    }
    document.getElementById('taskInput').value = '';
}