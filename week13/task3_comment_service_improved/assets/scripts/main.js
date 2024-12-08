const buttonSend = document.getElementById("buttonSend");

function getName() {
  const inputName = document.getElementById("inputName").value;
  return inputName;
}

function putName() {
  const inputName = getName();
  const choice = document.querySelector('input[name="IfShowName"]:checked');
  const userName = document.querySelector(".main-part__chat-section__name-container");
  if (choice && choice.value === "No") {
    userName.textContent = "username";
  } else {
    const temporaryUserName = (userName.textContent = inputName.replace(/[^A-Za-zА-Яа-яЁё\s]/g, "").toLowerCase());
    userName.textContent = temporaryUserName.charAt(0).toUpperCase() + temporaryUserName.slice(1);
  }
  document.getElementById("inputName").value = "";
}

function getAvatar() {
  const inputAvatar = document.getElementById("inputAvatarLink").value;
  return inputAvatar;
}

function putAvatar() {
  const avatars = [
    "/assets/images/avatar_elephant.png",
    "/assets/images/avatar_giraffe.png",
    "/assets/images/avatar_lion.png",
    "/assets/images/avatar_rhinoceros.png",
    "/assets/images/avatar_tiger.png",
    "/assets/images/avatar_zebra.png",
  ];
  const randomAvatarIndex = Math.floor(Math.random() * avatars.length);
  const inputAvatar = getAvatar();
  const userAvatar = document.getElementById("avatarImage");
  if (inputAvatar === "") {
    userAvatar.src = avatars[randomAvatarIndex];
  } else {
    userAvatar.src = inputAvatar;
  }
  userAvatar.style.visibility = "visible";
  document.getElementById("inputAvatarLink").value = "";
}

function getComment() {
  const inputComment = document.getElementById("inputComment").value;
  return inputComment;
}

function putComment() {
  const inputComment = getComment();
  const userComment = document.querySelector(".main-part__chat-section__comment-container");
  userComment.textContent = inputComment.replace(/viagra/g, "***").replace(/XXX/g, "***");
  userComment.style.borderBottom = "2px dashed #593dca";
  document.getElementById("inputComment").value = "";
}

function putDate() {
  let now = new Date();
  const userDateMessage = document.querySelector(".main-part__chat-section__date-container");
  userDateMessage.textContent = new Intl.DateTimeFormat("en-GB", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  }).format(now);
}

buttonSend.addEventListener("click", putName);
buttonSend.addEventListener("click", putAvatar);
buttonSend.addEventListener("click", putComment);
buttonSend.addEventListener("click", putDate);

// $('input[name="radio111"]:checked')

// const buttonSend = document.getElementById("buttonSend");
// const newDivContainer = document.querySelector(".main-part__chat-section_wrapper");

// // const inputName = document.getElementById("inputName").value;
// // const inputAvatar = document.getElementById("inputAvatarLink").value;
// // const inputComment = document.getElementById("inputComment").value;

// // const newDivName = document.querySelector(".main-part__chat-section__name-container");
// // const newDivAvatar = document.getElementById("avatarImage");
// // const newDivComment = document.querySelector(".main-part__chat-section__comment-container");

// function getName() {
//   const inputName = document.getElementById("inputName").value;
//   return inputName;
// }

// function putName() {
//   const inputName = getName();
//   // const userName = document.querySelector(".main-part__chat-section__name-container");
//   const temporaryUserName = inputName.replace(/[^A-Za-zА-Яа-яЁё\s]/g, "").toLowerCase();
//   // userName.textContent = temporaryUserName.charAt(0).toUpperCase() + temporaryUserName.slice(1);
//   const userName = document.querySelector(".main-part__chat-section__name-container").createElement("div");
//   userName.className = "main-part__chat-section__name-container";
//   userName.innerHTML = `${temporaryUserName.charAt(0).toUpperCase() + temporaryUserName.slice(1)}`;
//   newDivContainer.prepend(userName);
//   document.getElementById("inputName").value = "";
// }

// function getAvatar() {
//   const inputAvatar = document.getElementById("inputAvatarLink").value;
//   return inputAvatar;
// }

// function putAvatar() {
//   const inputAvatar = getAvatar();
//   const userAvatar = document.getElementById("avatarImage");
//   // userAvatar.src = inputAvatar;
//   userAvatar.style.visibility = "visible";
//   document.getElementById("inputAvatarLink").value = "";
//   const newDivAvatar = document.createElement("div");
//   newDivAvatar.className = "main-part__chat-section__image-container";
//   newDivAvatar.innerHTML = `<div class="main-part__chat-section__image-container">${(userAvatar.src =
//     inputAvatar)}</div>`;
//   newDivContainer.prepend(newDivAvatar);
// }

// function getComment() {
//   const inputComment = document.getElementById("inputComment").value;
//   return inputComment;
// }

// function putComment() {
//   const inputComment = getComment();
//   const userComment = document.querySelector(".main-part__chat-section__comment-container");
//   // userComment.textContent = `${inputComment.replace(/viagra/g, "***").replace(/XXX/g, "***")}`;
//   document.getElementById("inputComment").value = "";
//   const newDivComment = document.createElement("div");
//   newDivContainer.prepend(newDivComment);
//   newDivComment.className = "main-part__chat-section__comment-container";
//   newDivComment.innerHTML = `<div class="main-part__chat-section__comment-container">${(userComment.textContent = `${inputComment
//     .replace(/viagra/g, "***")
//     .replace(/XXX/g, "***")}`)}</div>`;
//   userComment.style.borderBottom = "2px dashed #593dca";
//   userComment.style.paddingBottom = "20px";
// }

// buttonSend.addEventListener("click", putName);
// buttonSend.addEventListener("click", putAvatar);
// buttonSend.addEventListener("click", putComment);
