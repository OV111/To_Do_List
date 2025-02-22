const addBtn = document.getElementById("btn");
const inputText = document.getElementById("placeholder");
const ul = document.getElementById("taskList");

function addingTask() {
    addBtn.addEventListener("click", () => {
        if(inputText.value.trim() === "") {      
            alert("Invalid Text!"); 
            inputText.value = "";
            return false;
        }
        if(ul.children.length >= 5) {
            alert("The List is Full! \nYou need to delete some Task");
            inputText.value = "";
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

// adding local storage then 
// function saveTask() {
//     localStorage.setItem("data",ul);
//     console.log(ul)   
// }
// function showTask() {
//     ul = localStorage.getItem("data")
// }
// showTask()