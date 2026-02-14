const a=[2,4,3,25,5,8];
const result=a.map((num)=>{
    return num*num;
})
console.log(result);

// if i want only even numbers square without using if else
const result1=a.filter((num)=>{
    return num%2==0;
}).map((num)=>{
    return num*num;
})
console.log(result1);
