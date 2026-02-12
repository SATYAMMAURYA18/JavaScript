//for...in loop
//1.used to iterate over keys of an object.
//2.in arrays it gives index

let person={
    name:"Satyam",
    age:20,
    city:"Delhi"
};
console.log("Using for in loop\n");
for(let key in person)
{
    console.log(key,person[key]);
}

//for...of
let a=[10,20,30,4];
a.name="Raju";
for(let value of a)
{
    console.log(value);
}

//for array we dont use for...in because ultimately array is object and if we put the value a.name="Raju",then it take name as value and store key in the string form while
//for...of dont take string as key it only take key in numerical index;
for(let key in a)
{
    console.log(key,a[key]);
}