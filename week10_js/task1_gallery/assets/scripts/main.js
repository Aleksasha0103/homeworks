function text() {
  console.log("Я учу JavaScript!");
}

text();

const imagesArray = [
  "/assets/img/cat1.jpg",
  "/assets/img/cat2.jpg",
  "/assets/img/cat3.jpg",
  "/assets/img/cat4.jpg",
  "/assets/img/cat5.jpg",
  "/assets/img/cat6.jpg",
  "/assets/img/cat7.jpg",
];

let i = 0;
function changeCatImageToNext() {
  const image = document.getElementById("element-image-cat");
  if (i < imagesArray.length - 1) {
    i++;
  }
  image.setAttribute("src", imagesArray[i]);
}

function changeCatImageToPrevious() {
  const image = document.getElementById("element-image-cat");
  if (i > 0) {
    i--;
  }
  image.setAttribute("src", imagesArray[i]);
}

const image = document.getElementById("element-image-cat");
image.setAttribute("src", imagesArray[0]);

let buttonPrevious = document.getElementById("buttonPrevious");
let buttonNext = document.getElementById("buttonNext");

buttonPrevious.addEventListener("click", changeCatImageToPrevious);
buttonNext.addEventListener("click", changeCatImageToNext);

// let image = document.getElementById("element-image-cat");
// console.log(image);

// function changeImagetoCat1() {
//   image.src = "/task1_gallery/assets/img/cat1.jpg";
// }

// function changeImagetoCat2() {
//   image.src = "/task1_gallery/assets/img/cat2.jpg";
// }
