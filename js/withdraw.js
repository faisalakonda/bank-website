// Step-1: Add the event listener to the Withdraw button
document.getElementById('btn-withdraw').addEventListener('click',function(){
    // Step-2: get the withdraw button from the withdraw input field
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    // Step-3: get previous withdraw total
    const withdrawTotalElement = document.getElementById('withdraw-total');
    // input field noy tai innerText hobe 
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    // convert string to number 
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    // Step-4: calculate total withdraw amount
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    // Step-5: set amount
    withdrawTotalElement.innerText = currentWithdrawTotal;
    // Step-5: get the previous value amount
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    // Step-6: set the new balance total
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText =newBalanceTotal;
    // Step-7: clear the withdraw field
    withdrawField.value = '';

})