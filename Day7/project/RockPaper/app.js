let userScore=0;
let computerScore=0;
function play(userChoice)
{
    const choices=["rock", "paper", "scissors"];
    const randomIndex=Math.floor(Math.random()*choices.length);
    const computerChoice=choices[randomIndex];

    //computer choice logic
    //for realastic feel we have to set delay
    setTimeout(()=>{
       document.getElementById("computer-choice").textContent=`Computer Choice : ${computerChoice}`;
    },700);
   
    let result="";
    if(computerChoice==userChoice)
    {
         result = "It's a Draw!";
    }
    else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  )
  {
    result="You Win!";
    userScore++;
  }
  else{
    result="Computer Win!";
    computerScore++;
  }

  if(result==="You Win!")
  {
    document.body.style.backgroundColor="#2e772e";
    const winSound=new Audio("sounds/win.mp3");
    winSound.play();
  }
  else if(result==="Computer Win!")
  {
     document.body.style.backgroundColor="#eb5555";
    const winSound=new Audio("sounds/lose.mp3");
    winSound.play();
  }
  else if(result==="It's a Draw!"){
      document.body.style.backgroundColor="#dad614";
    const winSound=new Audio("sounds/tie.mp3");
    winSound.play();
  }
  document.getElementById("result").textContent = result;
  document.getElementById("user-score").textContent = userScore;
  document.getElementById("comp-score").textContent = computerScore;
}
