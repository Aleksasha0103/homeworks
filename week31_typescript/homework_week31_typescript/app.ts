//Task 3//
console.log("Задание 3:");
console.log("Привет, меня зовут Саша");

//Task 5.1//
console.log("Задание 5.1:");
function add(argument1: number, argument2: string, text: string) {
  console.log(text + argument1 + argument2);
}

const text = "Сумма: ";
const random1 = 39;
const random2 = "18";

add(random1, random2, text);

//Task 5.2//
console.log("Задание 5.2:");
let cities: string[] = ["Москва", "Нью-Йорк", "Лос-Анджелес", "Лондон"];
console.log(cities);
cities.unshift("Абу-Даби");
console.log(cities);
console.log(cities.pop());

//Task 5.3//
console.log("Задание 5.3:");
type Population = { [cityName: string]: number };
let citiesPopulation: Population = {
  Москва: 13.1,
  "Нью-Йорк": 8.2,
  "Лос-Анджелес": 3.8,
  Лондон: 8.8,
};
console.log(Object.keys(citiesPopulation));
console.log(Object.values(citiesPopulation));
console.log(citiesPopulation[Object.keys(citiesPopulation)[0]]);

//Task 5.4//
console.log("Задание 5.4:");
enum Fruits {
  "FRESH",
  "WEEK_OLD",
  "SPOILED",
}

enum Books {
  "CLASSIC",
  "MODERN",
  "NONFICTION",
}

enum Cars {
  "RUSSIAN",
  "AMERICAN",
  "GERMAN",
}
console.log(Fruits);
console.log(Books);
console.log(Cars);

//Task 5.5//
console.log("Задание 5.5:");
enum Habitat {
  "DOMESTIC",
  "WILD",
}

type Animal = {
  specimen: string;
  age: number;
  isMammal: boolean;
  habitat: Habitat;
  hostName?: string;
};

const animal1: Animal = {
  specimen: "cow",
  age: 3,
  isMammal: true,
  habitat: Habitat.DOMESTIC,
  hostName: "Anna",
};

const animal2: Animal = {
  specimen: "snake",
  age: 1,
  isMammal: false,
  habitat: Habitat.WILD,
};
console.log(animal1);
console.log(animal2);

//Task 5.6//
console.log("Задание 5.6:");

const word = "This is a string.";
const figure = 25;
const noValue = undefined;
const booleanValue = true;

console.log("Есть переменные:");
console.log(word);
console.log(figure);
console.log(noValue);
console.log(booleanValue);

console.log("Выведем результат работы функции:");
function showStringOrNumber(value: unknown) {
  if (typeof value === "string" || typeof value === "number") {
    console.log(value);
  }
}

showStringOrNumber(word);
showStringOrNumber(figure);
showStringOrNumber(noValue);
showStringOrNumber(booleanValue);
