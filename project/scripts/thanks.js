let timesVisited = getTimes() || 0;

function getTimes() {
    return JSON.parse(localStorage.getItem("timesVisited"));
}

function addVisit() {
    timesVisited++;
}

function setTimes() {
    localStorage.setItem("timesVisited", timesVisited);
}

addVisit();
setTimes();

//footer
const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

// get the current year for footer
const date = new Date();
year.innerHTML = date.getFullYear();

//get the last modification date of the home page
let lastMod = document.lastModified;
lastModified.innerHTML = `Last Modified: ${lastMod}`;

//hamburger menu
const hamButton = document.querySelector(".ham-button");
const menu = document.querySelector("nav");

hamButton.addEventListener("click", () => {
    hamButton.classList.toggle("active");
    menu.classList.toggle("active");
});