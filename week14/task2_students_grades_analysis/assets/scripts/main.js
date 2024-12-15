//Task 1
function addRandomElements() {
  const grades = [];
  while (grades.length < 12) {
    const grade = Math.floor(Math.random() * 100 + 1);
    grades.push(grade);
  }
  return grades;
}

const grades = addRandomElements();
console.log("Задание 1. Массив с оценками студентов: " + grades);

//Task 2
function countAverageGrade(grades) {
  let tempTotalSum = 0;
  for (let i = 0; i < grades.length; i++) {
    tempTotalSum += grades[i];
  }
  const averageGrade = tempTotalSum / grades.length;
  return averageGrade;
}

console.log("Задание 2. Средний балл студентов: " + countAverageGrade(grades));

//Task 3
function countMaxGrade(grades) {
  const maxGrade = Math.max(...grades);
  return maxGrade;
}

const maxGrade = countMaxGrade(grades);
console.log("Задание 3. Максимальный балл студентов: " + maxGrade);

//Task 4
function countMinGrade(grades) {
  const minGrade = Math.min(...grades);
  return minGrade;
}

const minGrade = countMinGrade(grades);
console.log("Задание 4. Минимальный балл студентов: " + minGrade);

//Task 5
function findPositiveGrades(grades) {
  const positiveGrades = grades.filter((grade) => grade >= 60);
  return positiveGrades;
}

const positiveGrades = findPositiveGrades(grades);
const positiveGradesQuantity = positiveGrades.length;
const restGradesQuantity = grades.length - positiveGrades.length;
console.log(
  "Задание 5. Количество студентов, получивших положительную оценку: " +
    positiveGradesQuantity +
    ". Количество остальных студентов (получивших отрицательную оценку): " +
    restGradesQuantity
);

//Task 6
function findNegativeGrades(grades) {
  const negativeGrades = grades.filter((grade) => grade < 60);
  return negativeGrades;
}

const negativeGrades = findNegativeGrades(grades);
const negativeGradesQuantity = negativeGrades.length;
console.log("Задание 6. Количество студентов, получивших отрицательную оценку: " + negativeGradesQuantity);

//Task 7
function getLetterGradesFromNumeric(grades) {
  const letterGrades = grades.map(function (grade) {
    if (grade >= 80) {
      return (grade = "A");
    } else if (grade >= 60 && grade <= 79) {
      return (grade = "B");
    } else if (grade >= 40 && grade <= 59) {
      return (grade = "C");
    } else if (grade >= 20 && grade <= 39) {
      return (grade = "D");
    } else {
      return (grade = "E");
    }
  });
  return letterGrades;
}

const letterGrades = getLetterGradesFromNumeric(grades);
console.log("Задание 7. Буквенные аналоги оценок: " + letterGrades);
