// function names()
// {
//     // fun()//fun() is calling greet.
//     console.log(`hello i am name`);
//     // fun()//fun() is calling greet.
// }
// function greet()
// {
//   console.log('I am callback function');
// }
// // names(greet);

// function fetchingData()
// {
//     console.log('I am fetching data.');
//     greet();
//     setInterval(names,5000);
// }
// setInterval(fetchingData,3000);//function ko 3 second bad fir se call krta rhega for infinite number of repeatation.



let arr=[3,4,2,55,6];
arr.forEach((num,index,a)=>{
    console.log(num);
    a[index]*=4;
})
console.log(arr);