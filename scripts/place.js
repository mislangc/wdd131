//Same footer as home page, so same JavaScript. Lines 1 - 11
const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

// get the current year for footer
const date = new Date();
year.innerHTML = date.getFullYear();

//get the last modification date of the home page
let lastMod = document.lastModified;
lastModified.innerHTML = `Last Modified: ${lastMod}`;

const data = {
    area: "28,311 sq km",
    population: "1,455,271",
    capital: "Honolulu",
    languages: "English, Hawaiian",
    currency: "US Dollar",
    timeZone: "UTC-10",
    callingCode: "+808",
    internetTld: ".us"
}

let dataSection = document.querySelector("#data-table");
let weatherSection = document.querySelector("#weather-table");

for (const key in data) {
    dataSection.innerHTML += `<tr><th>${key}: </th><td>${data[key]}</td></tr>`;
}

function calculateWindChill(temperature, windSpeed) {
    return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
};

//Create object for weather section data
const weatherData = {};

let temp = 26;
const tempData = temp + " &#8451;"; //Celsius symbol
weatherData.temperature = tempData;
weatherData.condition = "Clear";
let windSpeed = 21;
const windData = windSpeed + " km/h";
weatherData.wind = windData;
if (temp <= 10 && windSpeed > 4.8) {
    let windChillData = `${calculateWindChill(temp, windSpeed).toFixed(1)} &#8451;`;
    weatherData.windChill = windChillData;
} else {
    weatherData.windChill = "N/A";
}

for (const key in weatherData) {
    weatherSection.innerHTML += `<tr><th>${key}: </th><td>${weatherData[key]}</td></tr>`;
}