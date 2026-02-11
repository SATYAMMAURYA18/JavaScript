function Odd_Even(num){
    if(num%2==0)
    {
        console.log(`${num} is a even number`);
    }
    else{
        console.log(`${num} is a odd number`);
    }
}
Odd_Even(79);

//reverse a number
const reverse_number=(number)=>{

    let reverse=0;
    let remainder;
    while(number!=0)
    {
        remainder=number%10;
        reverse=reverse*10+remainder;
        number=Math.floor(number/10);
    }
    return reverse;
}
let newNumber=reverse_number(543);
console.log(newNumber);

//printing sum;
const sum=(number)=>{
    let add=0;
    for(let i=0;i<=number;i++)
    {
        add+=i;
    }
    return add;
}
console.log(sum(10));

//factorial
const factorial=(number)=>{
    let i=1;
    let fact=1;
    while(i<=number)
    {
       fact*=i;
       i++;
    }
    return fact;
}
console.log(factorial(5));

//finding element from the array;
const arr=[10,5,8,7,6,3];
const find_element=(x)=>{
    let flag=false;
      for(let i=0;i<arr.length;i++)
      {
        if(arr[i]==x){
               flag=true;
               break;
        }
      }
    if(flag==true)
        {
            return "Yes";
        }  
        else{
            return "No";
        }
}
const check=find_element(3);
console.log(check);

//check number is prime or not
const prime_number=(number)=>{
     let bool=false;
     for(let i=2;i<number;i++)
     {
        if(number%i==0)
        {
            bool=true;
            break;
        }
     }
     if(bool==true)
     {
        return false;
     }
     else{
        return true;
     }
}
const prime_check=prime_number(36);
console.log(prime_check);

//grade checking using switch;
const grade=(marks)=>{
    switch(Math.floor(marks/10))
    {
        case 9:{
            return 'A';
        }
        case 8: return 'B';
        case 7: return 'c';
        case 6: return 'D';
        default: return 'F';
    }
}
console.log(grade(95));