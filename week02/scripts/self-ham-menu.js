const hamButton = document.querySelector(".ham-button");
const menu = document.querySelector(".ham-bar");

hamButton.addEventListener("click", () => {
    hamButton.classList.toggle("active");
    menu.classList.toggle("active");
});