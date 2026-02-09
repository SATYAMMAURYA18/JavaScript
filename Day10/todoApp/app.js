const taskInput=document.getElementById("taskInput");
const taskList=document.getElementById("taskList");
let task=JSON.parse(localStorage.getItem("task"))||[];
function addTask()
{
    if(taskInput.value==="")
    {
        alert("enter the task");
        return;
    }
    task.push({
        name:taskInput.value,
        completed:false
    });
    saveTask();
    taskInput.value=""
    renderTasks();
}
function renderTasks()
{
    taskList.innerHTML="";
    task.forEach((task,index)=>{
        const list=document.createElement("li");
        list.innerText=task.name;
        if(task.completed){
            list.classList.add("completed");
        }
        //remove button
        list.addEventListener('click',()=>{
            task[index].completed=!task[index].completed;
            saveTask();
            renderTasks();
        });
        taskList.appendChild(list);
    })
}

function saveTask()
{
    localStorage.setItem("task",JSON.stringify(task));
}
renderTasks();