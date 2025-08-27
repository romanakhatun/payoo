// toggle
const moneyMenu = document.getElementById("money-menu");
const moneyForm = document.getElementById("money-form");

const cashOutMenu = document.getElementById("cashOut-menu");
const cashOutForm = document.getElementById("cashOut-form");

console.log(moneyMenu, moneyForm, cashOutMenu, cashOutForm);

moneyMenu.addEventListener("click", function () {
  moneyForm.style.display = "block";
  cashOutForm.style.display = "none";
});

cashOutMenu.addEventListener("click", function () {
  moneyForm.style.display = "none";
  cashOutForm.style.display = "block";
});

// add money
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const defaultPin = 1234;

    const bankAccount = document.getElementById("bank-account").value;
    const accountNumber = document.getElementById("number").value;
    const pin = parseInt(document.getElementById("add-pin").value);

    // add amount
    const addAmount = parseInt(document.getElementById("add-amount").value);
    const balance = document.getElementById("balance");

    if (accountNumber.length < 11) {
      alert("please provide valid account number");
      return;
    }
    if (pin !== defaultPin) {
      alert("please prove valid pin number");
      return;
    }

    const newBalance = addAmount + parseInt(balance.innerText);
    balance.innerText = newBalance;
    console.log("add money successfully");
  });

// cash out money
document.getElementById("withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const withdrawNum = document.getElementById("withdraw-number").value;
  const defaultPin = 1234;
  const withdrawPin = parseInt(document.getElementById("withdraw-pin").value);

  const withdrawAmount = parseInt(
    document.getElementById("withdraw-amount").value
  );

  const balance = document.getElementById("balance");

  if (withdrawNum.length < 11) {
    alert("please provide valid account number");
    return;
  }

  if (withdrawPin !== defaultPin) {
    alert("please provide valid pin number");
    return;
  }

  const newBalance = parseInt(balance.innerText) - withdrawAmount;
  balance.innerText = newBalance;
  console.log("remove money successfully");
});
