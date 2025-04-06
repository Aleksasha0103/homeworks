const iconTop = document.getElementById("icon-top");

function showIconTop() {
  const scrollPosition = window.scrollY;
  const htmlHeight = document.documentElement.scrollHeight;

  if (scrollPosition >= htmlHeight * 0.15) {
    iconTop.style.display = "block";
  } else {
    iconTop.style.display = "none";
  }
}

window.addEventListener("scroll", showIconTop);
document.addEventListener("DOMContentLoaded", showIconTop);
