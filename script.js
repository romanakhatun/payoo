document.getElementById("loginBtn").addEventListener("click", function (e) {
  e.preventDefault();
  const defaultNum = 123456789;
  const defaultPin = 1234;

  const number = parseInt(document.getElementById("number").value);
  const pin = parseInt(document.getElementById("pin").value);

  if (defaultNum === number && defaultPin === pin) {
    window.location.href = "./home.html";
  } else {
    alert("Enter Correct all information");
  }
});
