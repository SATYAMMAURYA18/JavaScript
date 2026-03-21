//callback hell
function fetchingUserData(callback)
{
   console.log("Fetching User Data");
   const name="Satyam";
   setTimeout(()=>{
        callback(name);
   },3000)

}
function greet(name)
{
    console.log(`Hello ${name},how are you!`);
}
function meet(name)
{
    
    console.log(`Hello ${name},we will meet in Mumbai!`);
}

fetchingUserData(greet);
// fetchingUserData(meet);

