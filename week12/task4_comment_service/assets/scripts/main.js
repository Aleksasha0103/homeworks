const buttonSend = document.getElementById("buttonSend");

function getName() {
  const inputName = document.getElementById("inputName").value;
  return inputName;
}

function putName() {
  const inputName = getName();
  const userName = document.querySelector(".main-part__chat-section__name-container");
  const temporaryUserName = (userName.textContent = inputName.replace(/[^A-Za-zА-Яа-яЁё/s]/g, "").toLowerCase());
  userName.textContent = temporaryUserName.charAt(0).toUpperCase() + temporaryUserName.slice(1);
  document.getElementById("inputName").value = "";
}

function getAvatar() {
  const inputAvatar = document.getElementById("inputAvatarLink").value;
  return inputAvatar;
}

function putAvatar() {
  const inputAvatar = getAvatar();
  const userAvatar = document.getElementById("avatarImage");
  userAvatar.src = inputAvatar;
  userAvatar.style.visibility = "visible";
  document.getElementById("inputAvatarLink").value = "";
}

function getComment() {
  const inputComment = document.getElementById("inputСomment").value;
  return inputComment;
}

function putComment() {
  const inputComment = getComment();
  const userComment = document.querySelector(".main-part__chat-section__comment-container");
  userComment.textContent = inputComment.replace(/viagra/g, "***").replace(/XXX/g, "***");
  userComment.style.borderBottom = "2px dashed #593dca";
  document.getElementById("inputСomment").value = "";
}

buttonSend.addEventListener("click", putName);
buttonSend.addEventListener("click", putAvatar);
buttonSend.addEventListener("click", putComment);
