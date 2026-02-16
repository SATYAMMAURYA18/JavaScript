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