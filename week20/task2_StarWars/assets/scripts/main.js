const searchButton = document.getElementById("searchButton");
const objectSelect = document.getElementById("objectSelect");
const numberSelect = document.getElementById("numberSelect");
const resultField = document.getElementById("resultField");
const errorField = document.getElementById("errorField");
const finallyField = document.getElementById("finallyField");

searchButton.addEventListener("click", () => {
  resultField.textContent = "Идёт загрузка данных. Пожалуйста, подождите.";
  errorField.textContent = "";
  finallyField.textContent = "";

  let objectChosen = objectSelect.value;
  let numberChosen = numberSelect.value;

  fetch(`https://swapi.py4e.com/api/${objectChosen}/${numberChosen}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Статус запроса: произошла ошибка (${response.status}).`);
      }
      return response.json();
    })
    .then((data) => {
      if (data.name) {
        resultField.textContent = JSON.stringify(data.name);
      } else {
        resultField.textContent = JSON.stringify(data.title);
      }
      errorField.textContent = "";
    })
    .catch((error) => {
      errorField.innerHTML = `Запрос отклонён. Вероятно, запрашиваемые данные отсутствуют или сервер временно недоступен. <br>${error.message}`;
      resultField.textContent = "";
    })
    .finally(function () {
      finallyField.innerHTML = `Поиск завершён. <br>При необходимости вы можете попробовать обратиться к серверу ещё раз.`;
    });
});
