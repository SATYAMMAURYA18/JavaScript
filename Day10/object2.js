//nested object
const obj={
    name:"SATYAM",
    id:24363,
    amount:{
        balance:"567k/month",
        totalAmount:"400cr"
    }
}
// console.log(obj.name);
// console.log(obj.amount.totalAmount);

//inheritance;
let obj1={
    name:"Ram",
    gender:"Male"
}

let obj2={
    nameOfWife:"Sita",
    gender_wife:"female"
}
obj2.__proto__=obj1;//hmm obj1 ko obj2 ke value key ko access kr skte hai.
console.log(obj2.name);
console.log(obj2.gender);
console.log(obj2.gender_wife);

//in the array we can give object also;
let arr=[
     {
    question: "What is JavaScript?",
    answer: "JavaScript is a programming language used to make web pages interactive."
  },
  {
    question: "What is a variable?",
    answer: "A variable is used to store data values in a program."
  },
  {
    question: "What is an array?",
    answer: "An array is a data structure that stores multiple values in a single variable."
  },
  {
    question: "What is an object in JavaScript?",
    answer: "An object is a collection of key-value pairs."
  },
  {
    question: "What does DOM stand for?",
    answer: "DOM stands for Document Object Model."
  }
]

console.log(arr[0].question);
//for each ka use for every question and answer.
arr.forEach((quiz,index)=>{
    console.log(`${index+1}.${quiz.question}-${quiz.answer}`);
})