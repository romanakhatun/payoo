document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const bankAccount = document.getElementById("bank-account").value;
    const accountNumber = document.getElementById("number").value;
    const addPin = document.getElementById("add-pin").value;

    // add amount
    const addAmount = parseInt(document.getElementById("add-amount").value);
    const balance = document.getElementById("balance");
    const newBalance = addAmount + parseInt(balance.innerText);
    balance.innerText = newBalance;
  });
