const genreSelect = document.querySelector("#genres");

const genres = ["Open World", "MMORPG", "RPG", "Action", "Adventure", "Sports", "Puzzle", "FPS", "Sandbox", "Fighting", "Horror", "Racing", "Casual", "Management", "Survival", "RTS", "Strategy", "Battle Royale"];

function genreTemplate(genre) {
    const splitWord = genre.split(" ");
    const noSpaces = splitWord.join("");
    const smallLetters = noSpaces.toLowerCase();

    return `<option value="${smallLetters}">${genre}</option>`
}

const genreOptions = genres.map(genreTemplate);
console.log(genreOptions);
genreSelect.innerHTML += genreOptions.join("");

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