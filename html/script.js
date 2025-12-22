// Load tasks when page opens
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
showTasks();

function addTask() {
    const input = document.getElementById("taskInput");
    const task = input.value.trim();

    if (task === "") return; // ignore empty input

    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    input.value = "";
    showTasks();
}

function showTasks() {
    const list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task;

        // delete task when clicked
        li.onclick = () => {
            tasks.splice(index, 1);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            showTasks();
        };

        list.appendChild(li);
    });
}
