const addBtn = document.getElementById("btn");
const inputText = document.getElementById("placeholder");
const ul = document.getElementById("taskList");

function addingTask() {
    addBtn.addEventListener("click", () => {
        if(inputText.value.trim() === "") {      
            alert("none string"); 
            return false;
        }
        if(ul.children.length >= 5) {
            alert("the stack is full!");
            return false;
        } 
        const li = document.createElement("li");
        const checkbox = document.createElement("input");
        const delBtn = document.createElement("button");
        const textContent = document.createTextNode(" " + inputText.value.trim());            

        checkbox.type = "checkbox";
        checkbox.className = "checkbox";   

        delBtn.textContent = "❌";
        delBtn.className = "delete";

        delBtn.addEventListener("click", () => {
            li.remove();
        });

        li.appendChild(checkbox);
        li.appendChild(textContent);
        li.appendChild(delBtn);
        ul.appendChild(li);

        inputText.value = "";
    });
}
addingTask();


/* add the checkbox as marked, delete task , Add also the localstorage, edit task */