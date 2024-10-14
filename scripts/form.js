const productsOptions = document.querySelector("#products");

const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

function productTemplate(product) {
    //Uppercase first letter of every word in product.name
    const nameSplit = product.name.split(" ");
    const capitalizedFirstLetters = nameSplit.map((name) => name[0].toUpperCase() + name.slice(1));
    const productName = capitalizedFirstLetters.join(" ");

    //option template for the form select
    return `<option value="${product.id}" >${productName}</option>`
}

const productsList = products.map(productTemplate);
productsOptions.innerHTML += productsList.join("");

//Same footer as home page, so same JavaScript. Lines 1 - 11
const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

// get the current year for footer
const date = new Date();
year.innerHTML = date.getFullYear();

//get the last modification date of the home page
let lastMod = document.lastModified;
lastModified.innerHTML = `Last Modified: ${lastMod}`;