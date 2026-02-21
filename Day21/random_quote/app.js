let quote=document.getElementById('quote');
const quotes = [
  "Dream big, start small, act now.",
  "Consistency beats motivation every time.",
  "Code is read more than it is written.",
  "Your future depends on what you do today.",
  "Mistakes are proof that you are learning.",
  "Work hard in silence, let success make the noise.",
  "First solve the problem, then write the code.",
  "Discipline is choosing what you want most over what you want now.",
  "Every expert was once a beginner.",
  "Don’t watch the clock; do what it does. Keep going.",
  "Learning never exhausts the mind.",
  "Small progress is still progress.",
  "Bugs are just lessons in disguise.",
  "Success is built on daily habits.",
  "The best time to start was yesterday. The next best time is now.",
  "Push yourself, because no one else will do it for you.",
  "Great things take time.",
  "Code, break, debug, repeat.",
  "Focus on progress, not perfection.",
  "Believe in the process."
];

document.getElementById('btn').addEventListener('click',()=>{
    let randomIndex=Math.floor(Math.random()*quotes.length);
    quote.textContent=quotes[randomIndex];
    document.getElementById('btn').style.visibility="hidden";
})