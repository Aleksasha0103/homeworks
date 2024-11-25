const allPrices = document.querySelectorAll(".basket__itemPrice");
const allPricesArray = Array.from(allPrices);

function sumAll() {
  let sumAllPrices = 0;
  for (let i = 0; i < allPricesArray.length; i++) {
    let sumPrices = parseFloat(allPricesArray[i].textContent);
    sumAllPrices += sumPrices;
  }
  return sumAllPrices;
}

let ifDiscountMade = false;
let resultSum = document.getElementById("resultSum");
resultSum.innerHTML = sumAll();

function discountCount() {
  if (ifDiscountMade === false) {
    let initialSum = parseFloat(resultSum.innerHTML);
    const discountSum = initialSum * 0.8;
    resultSum.innerHTML = discountSum.toFixed(0);
    ifDiscountMade = true;
  } else {
    alert("Скидка уже применена!");
  }
}

const discountButton = document.getElementById("discountButton");
discountButton.addEventListener("click", discountCount);
