//Task 3//
console.log("Задание 3:");
console.log("Привет, меня зовут Саша");
//Task 5.1//
console.log("Задание 5.1:");
function add(argument1, argument2, text) {
    console.log(text + argument1 + argument2);
}
var text = "Сумма: ";
var random1 = 39;
var random2 = "18";
add(random1, random2, text);
//Task 5.2//
console.log("Задание 5.2:");
var cities = ["Москва", "Нью-Йорк", "Лос-Анджелес", "Лондон"];
console.log(cities);
cities.unshift("Абу-Даби");
console.log(cities);
console.log(cities.pop());
//Task 5.3//
console.log("Задание 5.3:");
var citiesPopulation = {
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
var Fruits;
(function (Fruits) {
    Fruits[Fruits["FRESH"] = 0] = "FRESH";
    Fruits[Fruits["WEEK_OLD"] = 1] = "WEEK_OLD";
    Fruits[Fruits["SPOILED"] = 2] = "SPOILED";
})(Fruits || (Fruits = {}));
var Books;
(function (Books) {
    Books[Books["CLASSIC"] = 0] = "CLASSIC";
    Books[Books["MODERN"] = 1] = "MODERN";
    Books[Books["NONFICTION"] = 2] = "NONFICTION";
})(Books || (Books = {}));
var Cars;
(function (Cars) {
    Cars[Cars["RUSSIAN"] = 0] = "RUSSIAN";
    Cars[Cars["AMERICAN"] = 1] = "AMERICAN";
    Cars[Cars["GERMAN"] = 2] = "GERMAN";
})(Cars || (Cars = {}));
console.log(Fruits);
console.log(Books);
console.log(Cars);
//Task 5.5//
console.log("Задание 5.5:");
var Habitat;
(function (Habitat) {
    Habitat[Habitat["DOMESTIC"] = 0] = "DOMESTIC";
    Habitat[Habitat["WILD"] = 1] = "WILD";
})(Habitat || (Habitat = {}));
var animal1 = {
    specimen: "cow",
    age: 3,
    isMammal: true,
    habitat: Habitat.DOMESTIC,
    hostName: "Anna",
};
var animal2 = {
    specimen: "snake",
    age: 1,
    isMammal: false,
    habitat: Habitat.WILD,
};
console.log(animal1);
console.log(animal2);
//Task 5.6//
console.log("Задание 5.6:");
var word = "This is a string.";
var figure = 25;
var noValue = undefined;
var booleanValue = true;
console.log("Есть переменные:");
console.log(word);
console.log(figure);
console.log(noValue);
console.log(booleanValue);
console.log("Выведем результат работы функции:");
function showStringOrNumber(value) {
    if (typeof value === "string" || typeof value === "number") {
        console.log(value);
    }
}
showStringOrNumber(word);
showStringOrNumber(figure);
showStringOrNumber(noValue);
showStringOrNumber(booleanValue);
