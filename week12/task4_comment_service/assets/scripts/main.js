const buttonSend = document.getElementById("buttonSend");

function putInputs() {
  const inputAvatar = document.getElementById("inputAvatarLink").value;
  const userAvatar = document.getElementById("#avatarImage");
  userAvatar.src = inputAvatar;
  userAvatar.style.width = "100px";
  userAvatar.style.height = "100px";
  document.getElementById("inputAvatarLink").value = "";

  const inputName = document.getElementById("inputName").value;
  const userName = document.querySelector(".main-part__chat-section__name-container");
  const temporaryUserName = (userName.textContent = inputName.replace(/[^A-Za-zА-Яа-я/s]/g, "").toLowerCase());
  userName.textContent = temporaryUserName.charAt(0).toUpperCase() + temporaryUserName.slice(1);

  document.getElementById("inputName").value = "";

  const inputComment = document.getElementById("inputСomment").value;
  const userComment = document.querySelector(".main-part__chat-section__comment-container");
  userComment.textContent = inputComment.replace(/viagra/g, "***").replace(/XXX/g, "***");
  userComment.style.borderBottom = "2px dashed #593dca";
  document.getElementById("inputСomment").value = "";
}

buttonSend.addEventListener("click", putInputs);
