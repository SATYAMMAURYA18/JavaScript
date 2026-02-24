const form =document.querySelector("form");
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const data=new FormData(form);
    console.log(data);
    console.log(data.keys());
    console.log(Array.from(data.keys()));
    console.log(Array.from(data.values()));
    data.forEach((value,index)=>{
        console.log(`${index}->${value}`);
    })
})