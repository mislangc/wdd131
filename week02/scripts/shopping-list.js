const ul = document.querySelector("ul");
const enteredItem = document.getElementById("item");
const button = document.querySelector("button");

function buttonClicked() {
    if (enteredItem.value != "") {
        console.log("It's working!");
        console.log(enteredItem.value);
        const theItem = enteredItem.value;
        console.log(theItem);
        enteredItem.value = "";
        const li = document.createElement("li");
        const span = document.createElement("span");
        const itemButton = document.createElement("button");
        li.appendChild(span);
        li.appendChild(itemButton);
        span.textContent = theItem;
        itemButton.textContent = "Delete";
        ul.appendChild(li);

        function deleteItem() {
            ul.removeChild(li);
        }

        itemButton.addEventListener("click", deleteItem);
        enteredItem.focus();
    }

}

button.addEventListener("click", buttonClicked);