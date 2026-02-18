function calculateBmi(){
    let height=Number(document.getElementById('height').value);
    let weight=Number(document.getElementById('weight').value);
    let cal=document.getElementById('cal');
    // i am here checking that user putting right value or not.
    if (weight <= 0 || height<= 0 || isNaN(weight) || isNaN(height)) {
    cal.innerText = "Please enter valid weight and height";
    cal.style.color = "red";
    return;
  }
  // i am doing here bmi calculation
    let heightMeter=height/100;
    let deno=heightMeter*heightMeter;
    const bmi=(weight/deno).toFixed(2);
    
    // i am checking category
    let category="";
    let color="";
    if(bmi<18.5)
    {
      category="Underweight";
      color="orange";
    }
    else if(bmi<25)
    {
        category="Normal";
        color="white";
    }
    else if (bmi<30) {
       category="Overweight";
       color="darkorange";
    } else {
        category="Obese";
        color="white";
  }
  // now lets show the result
  cal.innerText=`Your BMI is ${bmi} (${category})`;
  cal.style.color=color;
}