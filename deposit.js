document.getElementById('btn-deposit').addEventListener('click', function(){
    // deposit sector
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    depositField.value = "";
    if(isNaN(newDepositAmount)){
        alert('Please Provide a Valid Number');
        return;
       }



    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    const currentDeposiTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDeposiTotal;
    // balance sector 
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;
    
})

