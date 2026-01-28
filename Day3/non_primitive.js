
//NonPrimitive datatype....

//1.array
//in javascript array is the object.
let arr=[10,20,30,45];
console.log(arr);
//in the other language in array -> we can store only one type of data
//but in javascript ,array is object so it can store any type of data.
let a=[23,63,"Ram",true,23.54,'q'];
console.log(a);
console.log(typeof a);//type of array ==> object.


//2.object
// object store  in key-value pair
let obj={
    user_Name:"Satyam",
    account_Number: 4334252334532,
    balance: 88584
}
console.log(obj);
console.log(`The balance of ${obj.user_Name} is ${obj.balance} and account number is ${obj.account_Number}`);

//3.function
let fun=function()
{
    console.log("Hello,Satyam")
    return 45
}
fun();
console.log(typeof fun);//type of function is function.
console.log(fun)
console.log(fun());//it will print-> Hello,Satyam and 45

//4.Type conversion
let account_Balance="10";//this is in the form of string.
let num=Number(account_Balance);//now it is converted in the number.
console.log(typeof num);//number
console.log(num+10);
console.log(Boolean(num));//answer will be true.

let x=true;//this is boolean
console.log(x);
console.log(Number(x))//now 1

let num2=30;
console.log(typeof num2);//number
console.log(typeof(String(num2)));//string

//4.null
let y=null;
console.log(y);//it will print null.
console.log(Number(y));//it will print 0
console.log(Boolean(y));//it will print false
console.log(typeof y);//type of null is also object.

//5.undefined
let x2=undefined;
console.log(x2);// it will print undefined.
console.log(Number(x2));//it will print NaN->Not a Number.
console.log(typeof x2);// it will print undefined.

//Arithmatic operator.
let a1=5;
let b1=3;
console.log(a1+b1);//8
console.log(a1-b1);//2
console.log(a1*b1);//15
console.log(a1/b1);//1.666666
console.log(a1%b1);//2

//Divide Multiply left to right
//Add sub left to right.
console.log(6*8-9/3-2);

