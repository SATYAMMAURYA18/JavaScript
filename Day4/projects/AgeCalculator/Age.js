const ageBtn=document.getElementById("agebtn");

const result=document.getElementById("result");
ageBtn.addEventListener('click',()=>{
    const dob=document.getElementById("dob").value;
    if(dob=="")
    {
        alert("Enter Age Please!");
        return;
    }
    const currentDate=new Date();
    const birthDate=new Date(dob);
    const year=currentDate.getFullYear()-birthDate.getFullYear();
    const month=currentDate.getMonth()-birthDate.getMonth();
    const day=currentDate.getDate()-birthDate.getDate();
    const age=`${year}Years ${month} Months${day}Days`;
    if(year<=0)
    {
        result.innerText='Nice Try! You are in future.'
        return;
    }
    result.innerText=age;
})