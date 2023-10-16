document.addEventListener("DOMContentLoaded", function () {
    const taskForm = document.getElementById("task-form");
    const taskList = document.getElementById("task-list");

    taskForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const taskInput = document.getElementById("task");
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            const taskItem = document.createElement("li");
            taskItem.innerHTML = `
                <span>${taskText}</span>
                <button class="edit">Editar</button>
                <button class="delete">Excluir</button>
            `;

            taskList.appendChild(taskItem);

            taskInput.value = "";
            const deleteButton = taskItem.querySelector(".delete");
            deleteButton.addEventListener("click", function () {
                taskItem.remove();
            });

            const editButton = taskItem.querySelector(".edit");
            editButton.addEventListener("click", function () {
                const taskSpan = taskItem.querySelector("span");
                const updatedText = prompt("Editar tarefa:", taskSpan.textContent);
                if (updatedText !== null) {
                    taskSpan.textContent = updatedText;
                }
            });
        }
    });
});
