document.addEventListener("DOMContentLoaded", function () {
    loadTasks();
    document.getElementById("addButton").addEventListener("click", addTask);
});

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    if (taskText === "") return;

    let tasks = getTasks();
    tasks.push({ text: taskText, done: false });
    saveTasks(tasks);

    taskInput.value = "";
    renderTasks();
}

function toggleTask(index) {
    let tasks = getTasks();
    tasks[index].done = !tasks[index].done;
    saveTasks(tasks);
    renderTasks();
}

function deleteTask(index) {
    let tasks = getTasks();
    tasks.splice(index, 1);
    saveTasks(tasks);
    renderTasks();
}

function getTasks() {
    return JSON.parse(localStorage.getItem("tasks")) || [];
}

function saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    let tasks = getTasks();
    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        li.innerHTML = `
            <span class="${task.done ? 'done' : ''}" style="cursor: pointer; text-decoration: ${task.done ? 'line-through' : 'none'};">${task.text}</span>
            <button onclick="toggleTask(${index})">Selesai</button>
            <button onclick="deleteTask(${index})">Hapus</button>
        `;
        taskList.appendChild(li);
    });
}

function loadTasks() {
    renderTasks();
}