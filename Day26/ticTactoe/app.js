let turn = "O";
let total_turn=0;

//deciding winner
let winner = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let boar_array = new Array(9).fill("E");

function checkWinner() {
  for (let [index0, index1, index2] of winner) {
    if (
      boar_array[index0] != "E" &&
      boar_array[index0] === boar_array[index1] &&
      boar_array[index1] == boar_array[index2]
    )
      return 1;
  }
  return 0;
}

//print ho
const printer = (event) => {
  console.log(event.target.id);
  const element = event.target;
  if (boar_array[element.id] == "E") {
    total_turn++;
    if (turn === "O") {
      element.innerHTML = "O";
      boar_array[element.id] = "O";
      if (checkWinner()) {
        document.getElementById("winningMessage").innerHTML = "Winner is O";
        board.removeEventListener("click", printer);
        return;
      }
      turn = "X";
    } else {
      element.innerHTML = "X";
      boar_array[element.id] = "X";
      if (checkWinner()) {
        document.getElementById("winningMessage").innerHTML = "Winner is X";
        board.removeEventListener("click", printer);
        return;
      }
      turn = "O";
    }
    if(total_turn==9)
    {
         document.getElementById("winningMessage").innerHTML = "Match is draw";
    }
  }
};
const board = document.querySelector(".board");
board.addEventListener("click", printer);

const restart=document.getElementById('restartButton');
restart.addEventListener('click',()=>{
    const cell=document.getElementsByClassName("cell");
    Array.from(cell).forEach((value)=>{
        value.innerHTML="";
    })
    turn='O';
    total_turn=0;
    boar_array=new Array(9).fill('E');
    board.addEventListener("click", printer);
     document.getElementById("winningMessage").innerHTML = "";
})
