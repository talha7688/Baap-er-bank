document.getElementById('btn-withdraw').addEventListener('click', function(){
   const withdrawField = document.getElementById('withdraw-field');
   const newWithdrawAmountString = withdrawField.value;
   const newWithdrawAmount = parseFloat(newWithdrawAmountString);
   withdrawField.value = "";

   if(isNaN(newWithdrawAmount)){
    alert('Please Provide a Valid Number');
    return;
   }


   const withdrawTotalElement = document.getElementById('withdraw-total');
   const previousWithdrawTotalString = withdrawTotalElement.innerText;
   const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    


    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;
   

    if(newWithdrawAmount > previousBalanceTotal){
        alert('Baap er Account e Eto Taka Nai');
        return;
    }
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;
})