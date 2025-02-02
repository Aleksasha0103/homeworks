const addingButton = document.getElementById("addingButton");
const inputTitle = document.getElementById("inputTitle");
const inputBody = document.getElementById("inputBody");
const postsField = document.getElementById("postsField");
const errorItem = document.createElement("div");

addingButton.addEventListener("click", () => {
  const inputTitleValue = inputTitle.value;
  const inputBodyValue = inputBody.value;
  if (errorItem.parentNode) {
    errorItem.remove();
  }

  if (/^\s*$/.test(inputTitleValue) && /^\s*$/.test(inputBodyValue)) {
    alert("Поля не должны быть пустыми!");
    return;
  } else if (/^\s*$/.test(inputTitleValue)) {
    alert("Введите заголовок!");
    return;
  } else if (/^\s*$/.test(inputBodyValue)) {
    alert("Введите текст поста!");
    return;
  }

  const newPost = {
    title: inputTitleValue,
    body: inputBodyValue,
  };

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(newPost),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const titleItem = document.createElement("div");
      titleItem.classList.add("main-part__posts-list-field__title-item");
      titleItem.textContent = data.title;
      postsField.append(titleItem);

      const bodyItem = document.createElement("div");
      bodyItem.classList.add("main-part__posts-list-field__body-item");
      bodyItem.textContent = data.body;
      postsField.append(bodyItem);

      inputTitle.value = "";
      inputBody.value = "";
    })
    .catch((error) => {
      errorItem.classList.add("main-part__posts-list-field__error-item");
      errorItem.textContent = "Произошла ошибка при обработке данных. ";
      postsField.append(errorItem);
    });
});
