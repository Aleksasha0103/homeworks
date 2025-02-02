const paragraph = document.getElementById("paragraph");

function createPostHtml(parsedPost) {
  return `
  <div class = 'main-part__postsHtml'>
  <h2 class="main-part__posts-field__post-titile">Заголовок: ${parsedPost.title}</h2>
  <p class="main-part__posts-field__post-body">Статья: ${parsedPost.body}</p>
  </div>
  `;
}

function addHtmlPostIntoContainer(htmlPost) {
  const div = document.createElement("div");
  div.classList.add("main-part__post-paragraph");
  paragraph.append(div);
  div.innerHTML += htmlPost;
}

document.addEventListener("DOMContentLoaded", (event) => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      data.forEach((parsedPost) => {
        const htmlPost = createPostHtml(parsedPost);
        addHtmlPostIntoContainer(htmlPost);
      });
    })
    .catch((error) => {
      paragraph.textContent = "Произошла ошибка при получении данных";
    });
});
