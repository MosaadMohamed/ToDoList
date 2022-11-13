let theInput = document.querySelector(".container .input-area input");
let Button = document.querySelector(".input-area button");
let TasksDiv = document.querySelector(".tasks");
let storetasks ;



Button.onclick = () =>{

    if(theInput.value !=="")
    {
        
        getTasks(theInput.value);
        
        theInput.value = " ";
    }
}

function getTasks(tasks){

    storetasks = " ";

    storetasks = tasks;

    let divtask = document.createElement("div");

    divtask.className = "task";

    let div = document.createElement("div");

    div.innerHTML = storetasks;


    let span = document.createElement("span");

    span.innerHTML = "Delete";

    divtask.appendChild(div);
    divtask.appendChild(span);
    
    span.addEventListener("click" , (e)=>{
        e.target.parentElement.remove();
    });

    TasksDiv.appendChild(divtask);

}

