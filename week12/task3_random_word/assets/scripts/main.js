const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const number1 = Math.floor(Math.random() * alphabet.length);
const number2 = Math.floor(Math.random() * alphabet.length);
const number3 = Math.floor(Math.random() * alphabet.length);
const number4 = Math.floor(Math.random() * alphabet.length);
console.log(`${number1} ${number2} ${number3} ${number4}`);

const randomWord = `${alphabet[number1]} ${alphabet[number2]} ${alphabet[number3]} ${alphabet[number4]}`;
console.log(randomWord);
