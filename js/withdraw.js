// Step-1: Add the event listener to the Withdraw button
document.getElementById('btn-withdraw').addEventListener('click',function(){
    // Step-2: get the withdraw button from the withdraw input field
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmount = withdrawField.value;
    console.log(withdrawAmount);
})