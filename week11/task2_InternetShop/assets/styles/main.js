// function sum() {
//   const allPrices = document.getElementsByClassName(".basket__itemPrice");
//   const sum = 0;
//   for (const i = 0; i <= allPrices.length; i++) {
//     sum += i;
//   }
// }

const resultSum = document.getElementById("resultSum");
// resultSum.innerHTML = sum();

function discountCount() {
  const initialSum = resultSum.innerHTML;
  const discountSum = initialSum * 0.8;
  initialSum.innerHTML = discountCount;
}
const discountButton = document.getElementById("discountButton");
discountButton.addEventListener("click", discountCount);
