let arr=[3,4,56,"Satyam",true,45.65];
console.log(arr);
console.log(arr.length);//6
console.log(arr[3]);//Satyam
//slice
console.log(arr.slice(2,5));//[56,"Satyam",true];
//splice
console.log(arr.splice(1,3));//[4,56,"Satyam"];
arr.push(5);
console.log(arr);
arr.pop();
console.log(arr);
arr.shift(10);
console.log(arr);
arr.unshift(10);
console.log(arr);
console.log(arr.toString());
