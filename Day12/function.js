function sum(a,b)
{
    return a+b;
}
console.log(sum(4,5));

const multiply=function(a,b)
{
    return a*b;
}
console.log(multiply(4,5));

//arrow function
const square=number=> number*number;
console.log(square(5));
//arrow function;
const printNumber=(n)=>{
   for(let i=1;i<=n;i++)
   {
    console.log(i);
   }
}
printNumber(10);

//we can use spread operator/rest operator if we have not any idea about how many argument will come.
const add=(...number)=>{
    let sum=0;
    number.forEach((a,index)=>{
      sum+=a;
    })
    return sum;
}
console.log(add(4,5,3,5));
console.log(add(2,3));

//object ko hm fuction call bhi kr skte hai
let obj={
     name:"Satyam",
     roll_number:24363,
     college:"Knit,Sultanpur",
     sum_Number:(number)=>{
        let sum=0;
        for(let i=1;i<=number;i++)
        {
            sum+=i;
        }
        return sum;
     }
}

const function_Call=(obj1)=>{
   console.log(obj1.name);
   //here we can use object distruction;
   const {name,roll_number,college}=obj1;
   console.log(name,roll_number,college);
   const sum_object=obj1.sum_Number(10);
   console.log(sum_object);
}
function_Call(obj)