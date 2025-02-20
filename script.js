const addBtn = document.getElementById("btn");
const inputText = document.getElementById("placeholder");

let ul = document.getElementById("taskList");

function addingTask() {
    addBtn.addEventListener("click", () => {
        if(inputText.value.trim() !== "") {
            let li = document.createElement("li");
            
            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.className = "checkbox";

            
            let textContent = document.createTextNode(" " + inputText.value.trim());
            
            li.appendChild(checkbox)
            li.appendChild(textContent);
    

            ul.appendChild(li);
        } else {
            console.log("non string");
        }
    });
}
addingTask();