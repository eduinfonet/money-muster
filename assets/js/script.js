

document.getElementById("calculate-items").addEventListener('click', function(){
  // food item
  const foodItem = document.getElementById("food-item");
  const foodItrmString = foodItem.value;
  const foodItrmExpensis = parseFloat(foodItrmString);

  //   rent item
  const rentItem = document.getElementById("rent-item");
  const rentItemString = rentItem.value;
  const rentItemExpensis = parseFloat(rentItemString);

  //   cloths item

  const clothsItem = document.getElementById("cloths-item");
  const clothsItemString = clothsItem.value;
  const clothsItemExpensis = parseFloat(clothsItemString);

  // total expensis
  // total expensis: 01
  const totalExpensis = document.getElementById("total-expensis");
  const totalExpensisString = totalExpensis.innerText;
  const expensis = parseFloat(totalExpensisString);
  // total expensis: 02
  const expensisAmount =
    foodItrmExpensis + rentItemExpensis + clothsItemExpensis;
  totalExpensis.innerText = expensisAmount;

  //  monthly income
  const monthlyIncome = document.getElementById("monthly-income");
  const monthlyIncomeString = monthlyIncome.value;
  const monthlyIncomeTotal = parseFloat(monthlyIncomeString);
  //console.log(monthlyIncomeTotal);

  
  // monthly balance
    const monthlyBalance = document.getElementById("monthly-balance");
    const monthlyBalanceString = monthlyBalance.innerText;
    const monthlyBalanceTotal = parseFloat(monthlyBalanceString);


    const balanceAmount = monthlyIncomeTotal - expensisAmount;
    monthlyBalance.innerText = balanceAmount;
      
});

document.getElementById("btn-saving").addEventListener('click', function(){
  // Saving Percentage
  const monthlySaving = document.getElementById("monthly-saving");
  const monthlySavingString = monthlySaving.value;
  const monthlySavingTotal = parseFloat(monthlySavingString);
  const monthlySavingPercentage = monthlySavingTotal / 100;

  const savingAmountTotal = document.getElementById("saving-amount");
  const savingAmountString = savingAmountTotal.innerText;
  const savingAmount = parseFloat(savingAmountString);

  //  monthly income
  const monthlyIncome1 = document.getElementById("monthly-income");
  const monthlyIncomeString1 = monthlyIncome1.value;
  const monthlyIncomeTotal1 = parseFloat(monthlyIncomeString1);

  // monthly saving calculate

  const calculateSavingAmount = monthlyIncomeTotal1 * monthlySavingPercentage;
  savingAmountTotal.innerText = calculateSavingAmount;

  // monthly balance
  const monthlyBalance1 = document.getElementById("monthly-balance");
  const monthlyBalanceString1 = monthlyBalance1.innerText;
  const monthlyBalanceTotal1 = parseFloat(monthlyBalanceString1);


  // remaining balance
  const remainingBalance = document.getElementById("remaining-balance");
  const remainingBalanceString = remainingBalance.innerText;
  const monthlyRemainingBalance = parseFloat(remainingBalanceString);

  // remaining balance calculation

  const remainingBalanceCalculate = monthlyBalanceTotal1 - savingAmount;
  remainingBalance.innerText = remainingBalanceCalculate;

  //console.log(monthlySaving);
});