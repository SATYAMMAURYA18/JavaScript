//building greeting section
function updateTime()
{
const p=new Date();

document.getElementById("time").innerText=p.toLocaleDateString();
document.getElementById("date").innerText=p.toDateString();
const hours=p.getHours();
let greeting="Good Evening🌙";
if(hours<12)
{
    greeting="Good Morning🌞";
}
else if(hours>=12 && hours<18)
{
    greeting="Good Afternoon ☀️";
}
document.getElementById("greeting").innerHTML=greeting;
}
setInterval(updateTime,1000);
updateTime();

//building add task and progress->todo app
let tasks=JSON.parse(localStorage.getItem("tasks"))||[];//this means if data exist then fetch it otherwise empty array.
const taskInput=document.getElementById("taskInput");
const taskList=document.getElementById("taskList");
const progress=document.getElementById("progress");
document.getElementById("addBtn").addEventListener("click",()=>{
    if(taskInput.value==="")
    {
        alert("enter the task");
        return;
    }
    tasks.push({
        name:taskInput.value,
        completed:false
    });
    taskInput.value="";
    renderTasks();
})

function renderTasks()
{
     //displaying task and progress
    taskList.innerHTML="";
    let count=0;
    tasks.forEach((task,index)=>{
        const list=document.createElement("li");
        list.innerText=task.name;

        if(task.completed){
            list.classList.add("completed");
            //add completetaskcount
            count++;
        }
        list.addEventListener("click",()=>{
            tasks[index].completed=!tasks[index].completed;
            //again call function for repeating the task.
            saveTask();
            renderTasks(); 
        });
        taskList.appendChild(list);
    });
    const percentage=tasks.length ===0?0:Math.round((count/tasks.length)*100);
    progress.innerText=`percentage:${percentage}%`;
}

function saveTask()
{
    localStorage.setItem("tasks",JSON.stringify(tasks));
}
renderTasks();//refresh krne p task disappear nhi hoga..