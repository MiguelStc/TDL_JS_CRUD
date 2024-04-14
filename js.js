let tasks = [];

// Load tasks from local storage if available
if (localStorage.getItem('tasks')) {
    tasks = JSON.parse(localStorage.getItem('tasks'));
}

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<span class='delete' onclick="deleteTask(${index})">🗑️</span><p>${task}</p><span class='edit' onclick="editTask(${index})">📝</span>`;
        taskList.appendChild(li);
    });
    saveTasks();
}

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value.trim();
    if (task !== '') {
        tasks.push(task);
        taskInput.value = '';
        renderTasks();
    }
}

function editTask(index) {
    const newTask = prompt('Edit Task:', tasks[index]);
    if (newTask !== null) {
        tasks[index] = newTask.trim();
        renderTasks();
    }
}

function deleteTask(index) {
    if (confirm('Are you sure you want to delete this task?')) {
        tasks.splice(index, 1);
        renderTasks();
    }
}

// Initial rendering
renderTasks();
