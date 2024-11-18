let quantity = parseInt(document.getElementById("quantityInput").value) || 2;
let price = parseInt(document.getElementById("priceInput").value) || 15000000;

function calculateTotalPrice(quantity = 2, price = 15000000) {
  let cost = quantity * price;
  let textResult = cost.toLocaleString("ru-RU");
  alert("Стоимость покупки: " + textResult + " рублей.");
  textResult = document.getElementById("result-field");
}
