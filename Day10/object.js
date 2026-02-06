//building object..
let obj={
    user_name:"Satyam",
    roll_number:24363,
    amount:"400cr"
}
console.log(obj.user_name);//Satyam

//building class in javascript.
class people{
    constructor(name,age,roll_number)
    {
        this.name=name,
        this.age=age,
        this.roll_number=roll_number
    }
}
const per1=new people("Ram",45,56432);
console.log(per1);

//spread operator adds object in a single object.
let obj1={a:5,b:6,v:54};
let obj2={r:54,n:78,o:87};

let p={...obj,...obj1,...obj2};
console.log(p);