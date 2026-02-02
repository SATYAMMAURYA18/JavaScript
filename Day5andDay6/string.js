let str1="hello satyam";
console.log(str1);
let str2='Helo';
console.log(str2);
console.log(str1,str2);

const a=15;
console.log(`Hello Coder Army ${a}`);

let str3="Hello Coder Army";
console.log(str3.charAt(4));//o
console.log(str3.replace("Coder","Satyam"));
//difference between slice and substring is only slice can take negative index but substring only take positive index.
console.log(str3.slice(0,3));//Hel
console.log(str3.substring(0,3));//Hel

const b=15;
// b=32;
console.log(b);//error because of primitive data type.in primitive data type constant keyword store location of data in stack

//when non-primitive dataType use const keyword then it store the location of object but key and value of obj are in the heap when we change then location is same 
// but from refrence key change the value.

const obj={
    id:"Satyam",
    book:"BlackBook",
    nameOfVillage:"Bisauli"
}
console.log(obj.id);//Satyam
obj.id="Tinku";
console.log(obj.id)//no error
