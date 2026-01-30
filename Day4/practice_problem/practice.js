//1.print sum of two numbers
const sum = function (a, b) {
  return a + b;
};
//let add = sum(4, 5);
//console.log(add);

//2. check number is prime or not
let primeNumber = function (n) {
  let flag = 0;
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      flag = 1;
      break;
    }
  }
  if (flag == 0) {
    console.log(`${n} is prime number.`);
  } else {
    console.log(`${n} is not a prime number.`);
  }
};
//primeNumber(9);

//3.print all prime number for given number.
let primeNumber1 = function (n) {
  for (let i = 2; i < n; i++) {
    let flag = 0;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        flag = 1;
        break;
      }
    }
    if (flag == 0) {
      console.log(`${i} is prime number.`);
    } else {
      console.log(`${i} is not a prime number.`);
    }
  }
};
//primeNumber1(15);

//4.print all numbers;
let printNumber=function(n)
{
  let sum=0;
  for(let i=1;i<=n;i++)
  {
    console.log(i);
    sum+=i;
  }
  return sum;
}
//let sumNumber=printNumber(5);
//console.log(sumNumber);

//5.maximum number;
let max=function(arr,n)
{
   let small=arr[0];
   for(let i=0;i<n;i++)
   {
    if(small<arr[i])
    {
      small=arr[i];
    }
   }
   return small;
}
// let arr=[1,23,54,65,8];
// console.log(max(arr,5));

//5.maximum number;
let min=function(arr,n)
{
   let small=arr[0];
   for(let i=0;i<n;i++)
   {
    if(small>arr[i])
    {
      small=arr[i];
    }
   }
   return small;
}
let brr=[13,23,54,65,8];
console.log(min(brr,5));

