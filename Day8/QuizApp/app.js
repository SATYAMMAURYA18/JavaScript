const quizData= [
  {
    question: "What is it called when a bowler takes 3 wickets in 3 consecutive balls?",
    options: ["Triple", "Hat-trick", "Super over", "Maiden"],
    answer: "Hat-trick"
  },
  {
    question: "Which player is famous for the 'Helicopter Shot'?",
    options: ["Rohit Sharma", "Virat Kohli", "MS Dhoni", "Hardik Pandya"],
    answer: "MS Dhoni"
  },
  {
    question: "What is the maximum number of overs a bowler can bowl in an ODI match?",
    options: ["8", "12", "10", "15"],
    answer: "10"
  },
  {
    question: "Which country hosts the IPL?",
    options: ["Australia", "India", "England", "South Africa"],
    answer: "India"
  },
  {
    question: "What is a score of 100 runs by a batsman called?",
    options: ["Double", "Ton", "Century", "Milestone"],
    answer: "Century"
  },
  {
    question: "Which fielding position is directly behind the wicketkeeper?",
    options: ["Slip", "Third man", "Fine leg", "Gully"],
    answer: "Slip"
  },
  {
    question: "Which ball delivery spins towards a right-handed batsman from a right-arm off-spinner?",
    options: ["Leg spin", "Off spin", "Googly", "Yorker"],
    answer: "Off spin"
  },
  {
    question: "What is a maiden over?",
    options: [
      "An over with 6 wickets",
      "An over with no runs scored",
      "First over of match",
      "Over with only wides"
    ],
    answer: "An over with no runs scored"
  },
  {
    question: "How many umpires are on the field during a match?",
    options: ["1", "2", "3", "4"],
    answer: "2"
  },
  {
    question: "What is the term when a batsman is out on the first ball without scoring?",
    options: ["Duck", "Zero", "Golden duck", "Silver duck"],
    answer: "Golden duck"
  }
];

let currentQuestion=0;
let score=0;
let answered=false;
const count=document.getElementById("count");
function loadQuestion()
{
    answered=false;
    const q=quizData[currentQuestion];
    document.getElementById("question").innerText=(currentQuestion+1)+". "+q.question;

    const optionDiv=document.getElementById("options");
    optionDiv.innerHTML="";

     q.options.forEach(option=>{
        const btn=document.createElement("button");
        btn.innerText=option;
        btn.onclick=()=>checkAnswer(option);
        optionDiv.appendChild(btn);
     });
     document.getElementById('result').innerText="";
}

function checkAnswer(selectedOption)
{
 if(answered) return;
 answered=true;
 const CorrectAnswer=quizData[currentQuestion].answer;
 if(selectedOption==CorrectAnswer)
 {
    score++;
    document.getElementById('result').innerText="Correct!";
 }
 else{
    document.getElementById('result').innerText=`Wrong,Correct:${CorrectAnswer}`;
 }
}
document.getElementById('nextBtn').onclick=function(){
    currentQuestion++;
    const value=currentQuestion+1;
    if(value==11)
    {
        count.innerText="";
    }
    else{
    count.innerText=value+"/10";
    }
    if(currentQuestion<quizData.length)
    {
        loadQuestion();
    }
    else{
        document.getElementById("question").innerText = "Quiz Finished!";
        document.getElementById("options").innerHTML = "";
        document.getElementById("nextBtn").style.display = "none";
        document.getElementById("result").innerText = "Your Score: " + score + "/" + quizData.length;

    }

};
loadQuestion();
   