const featuredGamesSection = document.querySelector("#featured-games");
const popularGamesSection = document.querySelector("#popular-games");
//add code here

const featuredGames = [
    {
        name: "Call of Duty",
        img: "images/call-of-duty.jpg"
    },
    {
        name: "Fortnite",
        img: "images/fortnite.jpg"
    },
    {
        name: "Minecraft",
        img: "images/minecraft.jpg"
    },
    {
        name: "Roblox",
        img: "images/roblox.jpg"
    },
    {
        name: "World of Warcraft",
        img: "images/world-of-warcraft.jpg"
    },
    {
        name: "Stardew Valley",
        img: "images/stardew-valley.jpg",
    },
    {
        name: "The Witness",
        img: "images/the-witness.jpg",
    },
    {
        name: "Guild Wars 2",
        img: "images/guild-wars-two.jpg",
    },
    {
        name: "Gran Turismo 7",
        img: "images/gran-turismo-seven.jpg",
    },
    {
        name: "Starcraft 2",
        img: "images/starcraft-two.jpg",
    },
]

const popularGames = [
    {
        name: "CS GO",
        img: "images/csgo.jpg"
    },
    {
        name: "League of Legends",
        img: "images/league-of-legends.webp"
    },
    {
        name: "Overwatch",
        img: "images/overwatch.jfif"
    },
    {
        name: "Valorant",
        img: "images/valorant.jpg"
    },
    {
        name: "Cyberpunk 2077",
        img: "images/cyberpunk.jpg",
    },
    {
        name: "Apex Legends",
        img: "images/apex-legends.jpg",
    },
    {
        name: "Hitman 3",
        img: "images/hitman-three.jpg",
    },
    {
        name: "Baldurs Gate 3",
        img: "images/baldurs-gate-three.jpeg",
    },
    {
        name: "Tekken 8",
        img: "images/tekken-eight.jpg",
    },
    {
        name: "Factorio",
        img: "images/factorio.jpg",
    },
]

function gameCards(game) {
    return `<picture>
        <img src="${game.img}" alt="picture of the game ${game.name}" width=160 height=240 loading="lazy">
        <p>${game.name}</p>
            </picture>`
}

const featuredGamesCards = featuredGames.map(gameCards);
const popularGamesCards = popularGames.map(gameCards);
featuredGamesSection.innerHTML = featuredGamesCards.join("");
popularGamesSection.innerHTML = popularGamesCards.join("");

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