//1.this keyword outside the function.

// let a=10;
// const b=45;
// console.log(this)//this window ko point krega.//mtlb global object ko.
// console.log(this==window)//true
// console.log(this);//in nodejs -> this keyword prefer a empty object.=>  {}

//2. this keyword inside the function mtlb strict mode.

let obj={
    name:'Satyam',
    age:20,
    greet:function()
    {
        console.log(this);//here this keyword will point the obj;
        console.log(this.name);
        console.log(this.age+40);
    }
}
obj.greet();