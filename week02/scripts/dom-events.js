const buttonElement = document.getElementById("submitButton");

function copyInput(event) {
    // take a look at the event!
    console.log(event);
    console.log(event.target);
    console.log(event.currentTarget);
    console.log(event.type);
    const inputElement = document.getElementById("inputBox");
    const outputElement = document.getElementById("output");
    outputElement.innerHTML = inputElement.value;
}
buttonElement.addEventListener("click", copyInput);

//console logs every key pressed on the keyboard. SICK!
const log = document.querySelector("#log");

document.addEventListener("keydown", logKey);

function logKey(e) {
    // how do we know which key was pressed?
    console.log(e);
    // checkout e.code, e.key, and e.keyCode
    // what is the difference?
}

/*
Difference between e.code and e.key?
Based from how I understand:
e.code is the keyboard key pressed while e.key is the input value on the DOM based from the pressed key.
*/