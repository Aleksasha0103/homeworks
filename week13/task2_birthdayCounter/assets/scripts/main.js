function countDaysDifference() {
  const currentDate = new Date();
  const birthDate = new Date(document.getElementById("birthDate").value);
  resultMessageField = document.querySelector(".main-part__calculationMessageParagraph");
  const countDaysDifferenceResult = Math.ceil((birthDate - currentDate) / (1000 * 60 * 60 * 24));
  if (isNaN(birthDate.getTime())) {
    resultMessageField.textContent = "Пожалуйста, введите дату рождения";
    resultMessageField.style.color = "red";
  } else {
    const verbWord = function () {
      if (countDaysDifferenceResult % 10 === 1) {
        return "остался";
      } else {
        return "осталось";
      }
    };
    const dayWord = function () {
      if (countDaysDifferenceResult % 10 === 1 && countDaysDifferenceResult % 10 !== 11) {
        return "день";
      } else if (
        countDaysDifferenceResult % 10 === 2 ||
        countDaysDifferenceResult % 10 === 3 ||
        countDaysDifferenceResult % 10 === 4
      ) {
        return "дня";
      } else {
        return "дней";
      }
    };
    resultMessageField.textContent = `До вашего дня рождения ${verbWord()} ${countDaysDifferenceResult} ${dayWord()}`;
    resultMessageField.style.color = "#373739";
  }
}

countButton.addEventListener("click", countDaysDifference);
