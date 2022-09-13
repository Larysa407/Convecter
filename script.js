window.onload = function (event) {
  let bitcoin = document.getElementById("bitcoin");
  let dollar = document.getElementById("dollar");
 
  let resultButton = document.getElementById("resultButton");
  let bitcoinResult = document.querySelector(".bitcoinResult");
  let dollarResult = document.querySelector(".dollarResult");
  let price = document.querySelector(".price");

  bitcoin.addEventListener("keyup", function (e) {
    bitcoinResult.innerHTML =`Bitcoin ${bitcoin.value}`;
  });
  dollar.addEventListener("keyup", function (e) {
    dollarResult.innerHTML =`Dollar ${dollar.value}`;
  });

  resultButton.addEventListener("click", function (e) {
    let result = dollar.value/bitcoin.value;
    price.innerHTML =`You can buy ${result} BTC`;
  });
};