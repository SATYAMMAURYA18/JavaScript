//reduce
//in reduce(callback_function,initilization of accumalator)
//in callback_function(accumalator,current_value)
// accumalator mtlb previous value.
//current_value means array a pe iterate krega ek ek value ko.

let a=[10,20,30,40,50];
let result=a.reduce((accumalator,currentValue)=>{
    console.log(accumalator,currentValue);
    accumalator+=currentValue;
    return accumalator;
},0)//here intially accumalator me 0 store hai.
console.log(result);

//real world problem if an array come from backend i have to various number of product present in the array and return it in the form of object
//there fore we use reduce to minimize the logic
let arr=["apple","orange","banana","guava","papaya","apple","orange","Lichi","banana","guava","papaya","Mango","apple","orange","banana","guava","papaya","Lichi"];
const result1=arr.reduce((fruit,current)=>{
    if(fruit.hasOwnProperty(current))
    {
        fruit[current]++;
    }
    else{
        fruit[current]=1;
    }
    return fruit;
}, {});
console.log(result1);