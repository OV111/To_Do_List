const addBtn = document.getElementById("btn");
const inputText = document.getElementById("placeholder");

const ul = document.getElementById("taskList");

function addingTask() {
    addBtn.addEventListener("click", () => {
        if(inputText.value.trim() !== "") {
            const li = document.createElement("li");
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.className = "checkbox";
            
            const textContent = document.createTextNode(" " + inputText.value.trim());            
            li.appendChild(checkbox);
            li.appendChild(textContent);
            ul.appendChild(li);

            inputText.value = "";
        } else {
            console.log("non string");
        }
    });
}
addingTask()