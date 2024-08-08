const bill = document.getElementById("bill");
const people = document.getElementById("people");
const customTip = document.getElementById("custom-tip");
const reset = document.getElementById("reset");
const tipAmount = document.getElementById("amount-output");
const totalAmount = document.getElementById("total-output");

// const fiveTip = document.getElementById("tip-five");
// const tenTip = document.getElementById("tip-ten");
// const fifteenTip = document.getElementById("tip-fifteen");
// const twentyFiveTip = document.getElementById("tip-twenty-five");
// const fiftyTip = document.getElementById("tip-fifty");

function calcTipAmount(bill, tip, people) {
  const tipFormula = (bill * tip) / people;
  return parseFloat(tipFormula.toFixed(2));
}

function calcTotalPerPerson(bill, people, tipTotal) {
  const totalFormula = bill / people + tipTotal;
  return parseFloat(totalFormula.toFixed(2));
}

function displayTotals(tip, total) {
  tipAmount.innerHTML = `<h2>$${tip}</h2>`;
  totalAmount.innerHTML = `<h2>$${total}</h2>`;
}

function inputChange(){
  let billValue = parseFloat(bill.value);
  let peopleValue = parseInt(people.value);
  let customTipValue = parseFloat(customTip.value / 100);

  if (!isNaN(billValue) && !isNaN(peopleValue)) {
    const tipValue = calcTipAmount(billValue, customTipValue, peopleValue);
    const totalValue = calcTotalPerPerson(billValue, peopleValue, tipValue);
    displayTotals(tipValue, totalValue);
  }
}

function btnReset(){
  bill.value = '';
  people.value = '';
  customTip.value = ''; 
  tipAmount.innerHTML = `<h2>$0.00</h2>`;
  totalAmount.innerHTML = `<h2>$0.00</h2>`;
}

bill.addEventListener("input", inputChange);
people.addEventListener("input", inputChange);
customTip.addEventListener("input", inputChange);
reset.addEventListener("click", btnReset)

console.log(calcTipAmount(142.55, 0.15, 5));
console.log(calcTotalPerPerson(142.55, 5, calcTipAmount(142.55, 0.15, 5)));