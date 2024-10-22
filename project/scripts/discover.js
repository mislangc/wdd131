const discoverGames = document.querySelector(".discover-games");
const genreFilter = document.querySelector(".genre-filter");

const gamesList = [
    {
        name: "Call of Duty",
        img: "images/call-of-duty.jpg",
        genre: ["Adventure", "FPS"]
    },
    {
        name: "Fortnite",
        img: "images/fortnite.jpg",
        genre: ["Battle Royale"]
    },
    {
        name: "Minecraft",
        img: "images/minecraft.jpg",
        genre: ["Sandbox", "Survival"]
    },
    {
        name: "Roblox",
        img: "images/roblox.jpg",
        genre: ["Adventure", "FPS", "MMO"]
    },
    {
        name: "World of Warcraft",
        img: "images/world-of-warcraft.jpg",
        genre: ["Fantasy", "MMO", "MMORPG"]
    },
    {
        name: "CS GO",
        img: "images/csgo.jpg",
        genre: ["Action", "FPS", "Strategy"]
    },
    {
        name: "League of Legends",
        img: "images/league-of-legends.webp",
        genre: ["Action", "MOBA", "RTS"]
    },
    {
        name: "Overwatch",
        img: "images/overwatch.jfif",
        genre: ["Fighting", "FPS"]
    },
    {
        name: "Valorant",
        img: "images/valorant.jpg",
        genre: ["Action", "FPS"]
    },
    {
        name: "The Witcher 3",
        img: "images/the-witcher-three.jpg",
        genre: ["Open World", "Action", "Adventure", "RPG"]
    },
    {
        name: "Silent Hill 2",
        img: "images/silent-hill-two.jpg",
        genre: ["Horror", "Survival"]
    },
    {
        name: "Resident Evil 4",
        img: "images/resident-evil-four.jpg",
        genre: ["Adventure", "FPS", "Horror", "Survival"]
    },
    {
        name: "Red Dead Redemption II",
        img: "images/red-dead-redemption-two.jpg",
        genre: ["Action", "Adventure", "FPS", "Open World"]
    },
    {
        name: "Monster Hunter World",
        img: "images/monster-hunter-world.webp",
        genre: ["Action", "Adventure", "Fighting", "RPG"]
    },
    {
        name: "Elden Ring",
        img: "images/elden-ring.jpg",
        genre: ["Action", "Adventure", "Fighting", "RPG"]
    },
    {
        name: "Dead by Daylight",
        img: "images/dead-by-daylight.jpg",
        genre: ["Horror", "Survival"]
    },
    {
        name: "Cyberpunk 2077",
        img: "images/cyberpunk.jpg",
        genre: ["Adventure", "Fighting", "FPS", "RPG"]
    },
    {
        name: "Apex Legends",
        img: "images/apex-legends.jpg",
        genre: ["Battle Royale", "FPS"]
    },
    {
        name: "Hitman 3",
        img: "images/hitman-three.jpg",
        genre: ["Action", "TPS"]
    },
    {
        name: "Baldurs Gate 3",
        img: "images/baldurs-gate-three.jpeg",
        genre: ["RPG", "Strategy", "Adventure"]
    },
    {
        name: "Tekken 8",
        img: "images/tekken-eight.jpg",
        genre: ["Fighting", "Action"]
    },
    {
        name: "Factorio",
        img: "images/factorio.jpg",
        genre: ["Management", "Sandbox"]
    },
    {
        name: "Dyson Sphere Program",
        img: "images/dyson-sphere-program.jpg",
        genre: ["Management", "Sandbox"]
    },
    {
        name: "Genshin Impact",
        img: "images/genshin-impact.jpg",
        genre: ["Open World", "RPG", "Fantasy"]
    },
    {
        name: "Stardew Valley",
        img: "images/stardew-valley.jpg",
        genre: ["Casual", "Management"]
    },
    {
        name: "The Witness",
        img: "images/the-witness.jpg",
        genre: ["Puzzle", "Fantasy"]
    },
    {
        name: "Guild Wars 2",
        img: "images/guild-wars-two.jpg",
        genre: ["Open World", "MMORPG", "MMO"]
    },
    {
        name: "Gran Turismo 7",
        img: "images/gran-turismo-seven.jpg",
        genre: ["Racing", "Adventure"]
    },
    {
        name: "Starcraft 2",
        img: "images/starcraft-two.jpg",
        genre: ["Action", "RTS", "Management"]
    },
]

const genres = ["Open World", "MMORPG", "MMO", "RPG", "MOBA", "Action", "Adventure", "Sports", "Puzzle", "FPS", "TPS", "Sandbox", "Fighting", "Horror", "Racing", "Casual", "Management", "Survival", "RTS", "Strategy", "Battle Royale"];

//make game cards to display
function gameCardsTemplate(game) {
    return `<picture>
                <img src="${game.img}" alt="photo of the game ${game.name}" width="160" height="240" loading="lazy">
                <p>${game.name}</p>
            </picture>`
}

const gameCards = gamesList.map(gameCardsTemplate);
discoverGames.innerHTML = gameCards.join("");

//fill the genre filter with genres
function genreTemplate(genre) {
    const splitWord = genre.split(" ");
    const noSpaces = splitWord.join("");
    const smallLetters = noSpaces.toLowerCase();

    return `<option value="${smallLetters}">${genre}</option>`
}

const genreList = (genres.sort()).map(genreTemplate);
genreFilter.innerHTML += genreList.join("");

function filterGames(filter) {
    if (filter !== "all") {
        return gamesList.filter((game) => game.genre.map((genre) => genre.split(" ").join("").toLowerCase()).includes(filter));
    } else {
        return gamesList;
    }
}

//event listener for the select genre filter on discover page
genreFilter.addEventListener("change", function () {
    const filteredList = filterGames(genreFilter.value);
    const filteredGameCards = filteredList.map(gameCardsTemplate);
    discoverGames.innerHTML = filteredGameCards.join("");
    /*
        document.querySelectorAll("picture").forEach((game) => game.addEventListener("click", function () {
            discoverGames.innerHTML = "";
        }));
    */
});

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