//number number comparison.
let a=4;
let b=5;
console.log(a==b);
console.log(a>b);

//number string comparison
let str1="30";
console.log(a==str1);
let str2="5";
console.log(str2==b);//true //here when we are comparing , string will convert in number because of typecasting.
console.log(str2===b);// now it will give false because here if the type same then will be compare .
console.log(Number(str2)===b)// now true.

// number bool comparison
const c=1;
console.log(c==true);//true
console.log(c>true);//false
console.log(c>=true);//true

//number to character
let A='a';
console.log(typeof A);//string
console.log(A[0]==97);//false
console.log(Number(A[0]));// beacause it is NaN->not a number.

//Important rule->
//null is equal to undefined-> (null==undefined)
//null is not equal to any dataType expect undefined
console.log(null==undefined)//true
console.log(null===undefined)//false because here type will check first.
console.log(typeof null);//null is also an object.
console.log(typeof undefined);// undefined


console.log(null==0);//false->null only can be equivalent to undefined.
console.log(null>0);//false
console.log(null<0);//false
console.log(null>=0);//true
console.log(null<=0);//true
 
//undefine comparison
console.log(undefined);
console.log(undefined==0);//false
console.log(undefined>0);//false
console.log(undefined<0);//false
console.log(undefined<=0);//false
console.log(undefined>=0);//false

//NaN comparison
console.log(NaN==NaN);//false


let n1=123;
let n2="123";
let n3=123;
console.log(n1==n2==n3);//false
let n4=true;
console.log(n1==n2==n4);//true