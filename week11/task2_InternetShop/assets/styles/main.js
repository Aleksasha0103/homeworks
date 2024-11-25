// const allPrices = document.querySelectorAll(".basket__itemPrice");
// const allPricesArray = Array.from(allPrices);

// function sumAll() {
//   const sumAllPricesArray = 0;
//   for (const i = 0; i <= allPricesArray.length; i++) {
//     sum += allPricesArray[i];
//   }
//   return;
// }

let ifDiscountMade = false;
const resultSum = document.getElementById("resultSum");
// resultSum.innerHTML = sumAll();

function discountCount() {
  if (ifDiscountMade === false) {
    const initialSum = parseFloat(resultSum.innerHTML);
    const discountSum = initialSum * 0.8;
    resultSum.innerHTML = discountSum.toFixed(0);
    ifDiscountMade = true;
  } else {
    alert("Скидка уже применена!");
  }
}

const discountButton = document.getElementById("discountButton");
discountButton.addEventListener("click", discountCount);
