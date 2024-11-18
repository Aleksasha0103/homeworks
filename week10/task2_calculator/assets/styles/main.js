function text() {
  console.log("Я учу JavaScript!");
}

text();

let element = document.getElementById("element");
let image = document.getElementById("element-image-cat");
console.log(image);

function changeImagetoCat1() {
  image.src = "/task1_gallery/assets/img/cat1.jpg";
}

function changeImagetoCat2() {
  image.src = "/task1_gallery/assets/img/cat2.jpg";
}
