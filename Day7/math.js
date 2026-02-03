// number
let num1=432;
console.log(typeof num1);//number
let num2=new Number(432);
let num3=new Number(432);
console.log(num2);//432;
console.log(typeof num2);//object

console.log(num1==num2);//true//here num2 is converting object to number because we are comparing number.
console.log(num2==num3);//false//because it is object and it store refrence in stack so refrence is not match.

//Math
// console.log(Math.E);
// console.lof(Math.PI);