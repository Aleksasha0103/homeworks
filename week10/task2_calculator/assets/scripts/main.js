function calculateTotalPrice() {
  const quantity = parseInt(document.getElementById("quantityInput").value) || 2;
  const price = parseInt(document.getElementById("priceInput").value) || 15000000;
  const cost = quantity * price;
  const textResult = cost.toLocaleString("ru-RU");
  if (document.getElementById("quantityInput").value === "" || document.getElementById("priceInput").value === "") {
    document.getElementById(
      "result-field"
    ).value = `Стоимость покупки: ${textResult} рублей (использованы значения по умолчанию, т. к. данные не заполнены).`;
  } else {
    document.getElementById("result-field").value = `Стоимость покупки: ${textResult} рублей.`;
  }
}
