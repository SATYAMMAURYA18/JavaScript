const guessBtn = document.getElementById("btn");
const userInput = document.getElementById("user");
const count=document.getElementById("count");
const secretNumber = Math.floor(Math.random() * 100 + 1);
// console.log(secretNumber);
let attempt=0;
const result = document.getElementById("result");
guessBtn.addEventListener("click", (e) => {
    e.preventDefault();
    attempt++;//this will count number of attempt.
    count.innerText=attempt;
  const value = Number(userInput.value);
  if(attempt>=10 && value !== secretNumber)
  {
    result.innerText="Game Over! Number was " + secretNumber;
    guessBtn.disabled=true;
    return;
  }
  switch (value) {
    case secretNumber:
      result.innerText = `Correct Guess🎉in ${attempt} attempt`;
      setTimeout(()=>{
        location.reload();
      },5000)//the whole browser will update after 5 second.
      break;
    case secretNumber + 1:
      result.innerText = "Too Close🫡";
      break;
    case secretNumber + 2:
      result.innerText = "Too Close🫡";
      break;
    case secretNumber + 3:
      result.innerText = "Too Close🫡";
      break;
    case secretNumber + 4:
      result.innerText = "Too Close🫡";
      break;
    case secretNumber + 5:
      result.innerText = "Too Close🫡";
      break;

    case secretNumber - 1:
      result.innerText = "Too Close🫡";
      break;
    case secretNumber - 2:
      result.innerText = "Too Close🫡";
      break;
    case secretNumber - 3:
      result.innerText = "Too Close🫡";
      break;
    case secretNumber - 4:
      result.innerText = "Too Close🫡";
      break;
    case secretNumber - 5:
      result.innerText = "Too Close🫡";
      break;
    default:
         result.innerText="Too Far😲";

  }
});