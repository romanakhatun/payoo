const transactionData = [];
const defaultPin = 1234;

// reuseable function
function getValueToNumber(id) {
  return parseInt(document.getElementById(id).value);
}

// add money
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const bankAccount = document.getElementById("bank-account").value;
    const accountNumber = document.getElementById("number").value;
    const pin = getValueToNumber("add-pin");
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
    if (addAmount <= 0) {
      alert("invalid amount");
      return;
    }
    const newBalance = addAmount + parseInt(balance.innerText);
    balance.innerText = newBalance;

    const data = {
      name: "add money",
      date: new Date().toLocaleTimeString(),
    };
    transactionData.push(data);
    console.log(transactionData);
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
  if (withdrawAmount <= 0 || withdrawAmount > balance.innerText) {
    alert("invalid amount");
    return;
  }
  const newBalance = parseInt(balance.innerText) - withdrawAmount;
  balance.innerText = newBalance;

  const data = {
    name: "Cash out",
    date: new Date().toLocaleTimeString(),
  };

  transactionData.push(data);
  console.log(transactionData);
});

document
  .getElementById("transaction-menu")
  .addEventListener("click", function () {
    const transactionContainer = document.getElementById(
      "transaction-container"
    );
    transactionContainer.innerText = "";

    for (const data of transactionData) {
      const parentDiv = document.createElement("div");
      parentDiv.innerHTML = `
    <div
            class="flex items-center justify-between rounded-xl border border-[#0808081a] px-4 py-3 bg-white"
          >
            <div class="flex items-center gap-2">
              <div class="bg-[#f4f5f7] rounded-full p-3">
                <img src="./assets/bill.png" alt="" />
              </div>
              <div class="text-[#080808b3]">
                <h3 class="font-semibold">${data.name}</h3>
                <p class="text-xs">${data.date}</p>
              </div>
            </div>
            <div>
              <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
          </div>
    `;
      transactionContainer.appendChild(parentDiv);
    }
  });

// toggle reuseable function
function handleToggle(id) {
  const forms = document.getElementsByClassName("form");

  for (const form of forms) {
    form.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}
// focus button style change
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
// toggle system
document.getElementById("money-menu").addEventListener("click", function () {
  handleToggle("money-form");
  handleToggleButton("money-menu");
});

document.getElementById("cashOut-menu").addEventListener("click", function () {
  handleToggle("cashOut-form");
  handleToggleButton("cashOut-menu");
});

document
  .getElementById("transaction-menu")
  .addEventListener("click", function () {
    handleToggle("transaction-form");
    handleToggleButton("transaction-menu");
  });
