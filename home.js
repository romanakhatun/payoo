// toggle
function handleToggle(id) {
  const forms = document.getElementsByClassName("form");

  for (const form of forms) {
    form.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}

function handleToggleButton(id) {
  const menuBtns = document.getElementsByClassName("menu-btn");

  for (const menuBtn of menuBtns) {
    menuBtn.classList.remove(
      "border-[#0874F2]",
      "text-[#0874F2]",
      "bg-[#0874f20d]"
    );
    menuBtn.classList.add("text-[#080808b3]", "border-[#0808081a]");
  }
  document
    .getElementById(id)
    .classList.remove("text-[#080808b3]", "border-[#0808081a]");
  document
    .getElementById(id)
    .classList.add("border-[#0874F2]", "text-[#0874F2]", "bg-[#0874f20d]");
}
////
document.getElementById("money-menu").addEventListener("click", function () {
  handleToggle("money-form");
  handleToggleButton("money-menu");
});

document.getElementById("cashOut-menu").addEventListener("click", function () {
  handleToggle("cashOut-form");

  handleToggleButton("cashOut-menu");
});

const defaultPin = 1234;
// reuseable function
function getValueToNumber(id) {
  return parseInt(document.getElementById(id).value);
}

function getInnerText(id) {
  return parseInt(document.getElementById(id).innerText);
}

// add money
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const bankAccount = document.getElementById("bank-account").value;
    const accountNumber = document.getElementById("number").value;
    const pin = getValueToNumber("add-pin");

    // add amount
    const addAmount = getValueToNumber("add-amount");
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
  const withdrawPin = getValueToNumber("withdraw-pin");

  const withdrawAmount = getValueToNumber("withdraw-amount");

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
