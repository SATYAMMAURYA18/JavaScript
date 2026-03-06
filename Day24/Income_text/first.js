const btn=document.getElementById('btn');
btn.addEventListener('click',(e)=>{
    e.preventDefault();
    let tax=0;
    const income=Number(document.getElementById('income').value);
    if (income <= 300000) {
        tax = 0;
    }
    else if (income <= 600000) {
        tax = (income - 300000) * 0.05;
    }
    else if (income <= 900000) {
        tax = (300000 * 0.05) + (income - 600000) * 0.10;
    }
    else if (income <= 1200000) {
        tax = (300000 * 0.05) + (300000 * 0.10) + (income - 900000) * 0.15;
    }
    else if (income <= 1500000) {
        tax = (300000 * 0.05) + (300000 * 0.10) + (300000 * 0.15) + (income - 1200000) * 0.20;
    }
    else {
        tax = (300000 * 0.05) + (300000 * 0.10) + (300000 * 0.15) + (300000 * 0.20) + (income - 1500000) * 0.30;
    }
    let result=document.getElementById('result');
    result.innerHTML=`Annual Income:₹${income}<br>Tax Payable:₹${tax}`;
})