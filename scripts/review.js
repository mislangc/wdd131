let counter = getCount() || 0;

function getCount() {
    return Number(JSON.parse(localStorage.getItem("count")));
}

function addCount() {
    counter++;
}

function setCount() {
    localStorage.setItem("count", counter);
}

addCount();
setCount();

const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

// get the current year for footer
const date = new Date();
year.innerHTML = date.getFullYear();

//get the last modification date of the home page
let lastMod = document.lastModified;
lastModified.innerHTML = `Last Modified: ${lastMod}`;