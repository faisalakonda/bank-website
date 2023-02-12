// Step-1: Add the event listener to the deposit button 
document.getElementById('btn-deposit').addEventListener('click',function(){
    // Step-2: get the deposit button from the deposit input field
    // always remember to use .value to get text from an input field 
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    // Step-3: get the current deposit total 
    // for non-input(element other than input, textarea) use innerText to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    // Step-4: Convert string to number
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;
    // step-5: get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString =balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    // Step-6: calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    // Set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;
    // Step-7: clear the deposit field
    depositField.value = '';
})

// Step-1: Add the event listener to the Withdraw button
document.getElementById('btn-withdraw').addEventListener('click',function(){
    // Step-2: get the withdraw button from the withdraw input field
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmount = withdrawField.value;
    console.log(withdrawAmount);
})