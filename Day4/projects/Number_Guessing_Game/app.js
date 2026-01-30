const guessBtn=document.getElementById("btn");
const userInput=document.getElementById("user");
const secretNumber=Math.floor(Math.random()*100+1);
console.log(secretNumber);
const result=document.getElementById("result");
guessBtn.addEventListener('click',()=>{
    const value=Number(userInput.value);
    if(value===secretNumber)
    {
        
        result.innerText="Matched";
        
    }
    else if(value>secretNumber)
    {
        result.innerText="Too Far";
        
    }
    else{
        result.innerText="Too Close";
       
    }
});


