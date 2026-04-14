//making promises
const promises=fetch('http://api.weatherapi.com/v1/current.json?key=de729b0c3f7e42dfa7f91407261404&q=London&aqi=no');
// console.log(promises);
// setTimeout(()=>{
//     console.log(promises);
// },3000)

//handling promises
promises.then((data)=>{
    return data.json()
}).then((response)=>{
    console.log(`City:${response.location.name}`);
    console.log(`Country:${response.location.country}`);
    console.log(`Temp:${response.current.temp_c}`);
    console.log(`Weather:${response.current.condition.text}`);
})