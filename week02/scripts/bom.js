const input = document.getElementById("favchap");
const button = document.querySelector("button");
const list = document.getElementById("list");



button.addEventListener("click", function () {
    if (input.value.trim() !== "") {
        const chapterItem = document.createElement("li");
        const deleteButton = document.createElement("button");
        chapterItem.textContent = input.value;

        // clean input
        input.value = "";

        deleteButton.textContent = "❌";
        chapterItem.appendChild(deleteButton);
        list.appendChild(chapterItem);

        // add event for delete button
        function deleteChapter(event) {
            chapterItem.remove();
            input.focus();
        }
        deleteButton.addEventListener("click", deleteChapter)

        input.focus();
    } else {
        console.log("No input.")
        input.focus();
    }

})