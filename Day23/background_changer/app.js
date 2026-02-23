//brute force code

// const red=document.getElementById('red');
// const blue=document.getElementById('blue');
// const orange=document.getElementById('orange');
// const purple=document.getElementById('purple');
// const body=document.body;

// red.addEventListener('click',()=>{
//    body.style.backgroundColor="red";
// })
// blue.addEventListener('click',()=>{
//    body.style.backgroundColor="blue";
// })
// orange.addEventListener('click',()=>{
//    body.style.backgroundColor="orange";
// })
// purple.addEventListener('click',()=>{
//    body.style.backgroundColor="purple";
// })

//optimise code

const buttons=document.querySelectorAll('button');
const body=document.body;
buttons.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        body.style.backgroundColor=btn.id;
    })
})