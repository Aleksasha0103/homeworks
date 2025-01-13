const button = document.getElementById("submitBtn");
const form = document.forms.form;
const nameField = document.forms.form.elements.name;
const emailField = document.forms.form.elements.email;
const ageField = document.forms.form.elements.age;
const genderRadio = document.forms.form.elements.gender;
const professionSelect = document.forms.form.elements.profession;
const passwordField = document.forms.form.elements.password;
const agreementCheckbox = document.forms.form.elements.agreement;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
const ageRegex = /^\d{1,3}$/;
const passwordRegex = /^(?=.*[A-Za-zА-Яа-яЁё])(?=.*[A-ZА-ЯЁ])(?=.*[a-zа-яё])(?=.*\d)[A-Za-zА-Яа-яЁё\d]+$/;

form.addEventListener("submit", function (evt) {
  evt.preventDefault();

  document.querySelectorAll(".error-message").forEach(function (error) {
    error.textContent = "";
  });

  let isValid = true;

  nameField.addEventListener("focus", function () {
    nameField.style.border = "3px solid rgb(73, 234, 97)";
  });
  nameField.addEventListener("blur", function () {
    nameField.style.border = "";
  });

  if (nameField.value.trim() === "") {
    document.getElementById("nameFieldError").textContent = "Поле «Имя» не должно быть пустым.";
    isValid = false;
  } else if (nameField.value.length < 2 || nameField.value.length > 20) {
    document.getElementById("nameFieldError").textContent = "Имя должно содержать от 2 до 20 букв.";
    isValid = false;
  }

  emailField.addEventListener("focus", function () {
    emailField.style.border = "3px solid rgb(73, 234, 97)";
  });
  emailField.addEventListener("blur", function () {
    emailField.style.border = "";
  });

  if (emailField.value.trim() === "") {
    document.getElementById("emailFieldError").textContent = "Поле E-mail не должно быть пустым.";
    isValid = false;
  } else if (!emailRegex.test(emailField.value)) {
    document.getElementById("emailFieldError").textContent = "E-mail должен содержать символ @ и доменное имя.";
    isValid = false;
  }

  ageField.addEventListener("focus", function () {
    ageField.style.border = "3px solid rgb(73, 234, 97)";
  });
  ageField.addEventListener("blur", function () {
    ageField.style.border = "";
  });

  if (ageField.value.trim() === "") {
    document.getElementById("ageFieldError").textContent = "Поле «Возраст» не должно быть пустым.";
    isValid = false;
  } else if (!ageRegex.test(ageField.value) || ageField.value <= 1 || ageField.value >= 100) {
    document.getElementById("nameFieldError").textContent = "Введите число от 1 до 100.";
    isValid = false;
  }

  if (genderRadio[0].checked === false && genderRadio[1].checked === false) {
    document.getElementById("genderRadioError").textContent = "Отметьте ваш пол.";
    isValid = false;
  }

  if (professionSelect.value === "") {
    document.getElementById("professionSelectError").textContent = "Укажите вашу профессию.";
    isValid = false;
  }

  passwordField.addEventListener("focus", function () {
    passwordField.style.border = "3px solid rgb(73, 234, 97)";
  });
  passwordField.addEventListener("blur", function () {
    passwordField.style.border = "";
  });

  if (passwordField.value.trim() === "") {
    document.getElementById("passwordFieldError").textContent = "Поле «Пароль» не должно быть пустым.";
    isValid = false;
  } else if (passwordField.value.length < 8 || !passwordRegex.test(passwordField.value)) {
    document.getElementById("passwordFieldError").textContent =
      "Пароль должен содержать минимум 8 символов, 1 заглавную букву, 1 строчную букву, 1 цифру";
    isValid = false;
  }

  if (agreementCheckbox.checked === false) {
    document.getElementById("agreementCheckboxError").textContent =
      "Поставьте галочку, подтверждающую согласие на обработку данных.";
    isValid = false;
  }

  if (isValid) {
    alert("Данные успешно отправлены!");
    console.log(nameField.value);
    console.log(emailField.value);
    console.log(ageField.value);
    console.log(genderRadio[0].checked ? genderRadio[0].value : genderRadio[1].value);
    console.log(professionSelect.value);
    console.log(passwordField.value);
    console.log(agreementCheckbox.checked);
    form.reset();
  }
});
