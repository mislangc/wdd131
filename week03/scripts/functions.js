const placeholder = document.querySelector("#fullName");

console.log("Hello World");
let firstName = 'Antonia';
let lastName = 'Francesca';

//Function declaration
function fullName(first, last) {
    return `${first} ${last}`;
}

console.log(fullName(firstName, lastName));

//Function expression
const fullNameTwo = function (first, last) {
    return `${first} ${last}`;
}

console.log(fullNameTwo(firstName, lastName));

//Arrow function expression
const fullNameThree = (first, last) => {
    return `${first} ${last}`;
}

console.log(fullNameThree(firstName, lastName));

placeholder.innerText = fullName(firstName, lastName);