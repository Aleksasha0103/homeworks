const cities = ["Москва", "Санкт-Петербург", "Нью-Йорк", "Токио"];
let temperatures = [];
const divText = document.querySelector(".main-part__text");
for (const city of cities) {
  let temperature = prompt(`Введите температуру для города ${city}`);
  temperatures.push(temperature);
  const pText = document.createElement("p");
  pText.classList.add("main-part__text__paragraph");
  let printCity;
  if (city === "Москва") {
    printCity = "Москве";
  } else if (city === "Санкт-Петербург") {
    printCity = "Санкт-Петербурге";
  } else if (city === "Нью-Йорк") {
    printCity = "Нью-Йорке";
  } else if (city === "Токио") {
    printCity = "Токио";
  }
  pText.textContent = `Температура в ${printCity}: ${temperature} °С.`;
  divText.appendChild(pText);
}

pText = document.createElement("p");
pText.classList.add("main-part__text__paragraph-bold");
divText.appendChild(pText);
pText = document.createElement("p");
pText.classList.add("main-part__text__paragraph-bold");
pText.textContent = `Максимальная температура: ${Math.max(...temperatures)} °С.`;
divText.appendChild(pText);
pText = document.createElement("p");
pText.classList.add("main-part__text__paragraph-bold");
pText.textContent = `Минимальная температура: ${Math.min(...temperatures)} °С.`;
divText.appendChild(pText);

// console.log(temperatures);
