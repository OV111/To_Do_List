const addBtn = document.getElementById("btn");
const inputText = document.getElementById("placeholder");

let ul = document.getElementById("taskList");

function addingTask() {
    
    addBtn.addEventListener("click", () => {
        if(inputText.value.trim() !== "") {
            // console.log(inputText.value);
            let li = document.createElement("li");
            
            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.className = "checkbox";

            // let textContent = inputText.value.trim();
            
            let textContent = document.createTextNode(" " + inputText.value.trim());
            
            li.appendChild(checkbox)
            li.appendChild(textContent);
            
            // console.log(checkbox)
            // console.log(input)

            ul.appendChild(li);
        } else {
            console.log("non string");
        }
    });
}
addingTask();