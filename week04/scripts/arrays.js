//  arrays.js
const steps = ["one", "two", "three"];
function listTemplate(step) {
    return `<li>${step}</li>`//the html string made from step
};

const stepsHtml = steps.map(listTemplate);// use map to convert the list from strings to HTML
console.log(stepsHtml);

document.querySelector("#myList").innerHTML = stepsHtml.join(""); // set the innerHTML

const letterGrades = ["A", "B", "A"];

function returnGPA(letterGrade) {
    if (letterGrade === "A") {
        return 4;
    } else if (letterGrade === "B") {
        return 3;
    }
}

//.reduce()
const listGPA = letterGrades.map(returnGPA);
console.log(listGPA);

function gradePointAverage(listOfGrades) {
    const total = listOfGrades.reduce((total, gradePoint) => total + gradePoint);
    const average = total / listOfGrades.length;
    return average.toFixed(2);
}

const currentGPA = gradePointAverage(listGPA);
console.log(currentGPA);

//.filter()
const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const isMoreThanSixLetters = fruits.filter((fruit) => fruit.length > 6);
console.log(isMoreThanSixLetters);

const isLessThanSixLetters = fruits.filter((fruit) => fruit.length < 6);
console.log(isLessThanSixLetters);

//.indexOf()
const numbers = [12, 34, 21, 54];
const numbersTwo = [15, 33, 19, 49];
const luckyNumber = 21;

function luckyNumberPresent(numbersList) {
    const luckyIndex = numbersList.indexOf(luckyNumber);
    if (numbersList[luckyIndex] == luckyNumber) {
        console.log("True!");
    } else {
        console.log("Nope.");
    }
}

luckyNumberPresent(numbers);
luckyNumberPresent(numbersTwo);