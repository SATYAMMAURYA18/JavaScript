//filter
//filter-> means value ko chhatana 
//just like amazon me category filter ke liye.
//in filter we can only filter the value but can not modify directly we have to apply the logic 
//for modifying we use map.

let arr=[10,22,11,33,65,79,90,56];
const result=arr.filter((num)=>{
    return num%2==0;
})
console.log(result);

//real world use of filter
const students=[
    {name:"Satyam",sub:"EM&I",marks:60},
    {name:"Satyam",sub:"BDMS",marks:60},
    {name:"Satyam",sub:"BSS",marks:40},
    {name:"Satyam",sub:"EMT",marks:45},
    {name:"Satyam",sub:"CS",marks:53},
];
const result1=students.filter((value)=>{
    return value.marks>55;
})
console.log(result1);