const input = document.getElementById("favchap");
const button = document.querySelector("button");
const list = document.getElementById("list");

// Week 5 Local Storage learning activity

// Item 1-3
/* First attempt 
const chaptersArray = () => {
    if (!localStorage.getItem || numVisits == 0) {
        return [];
    } else {
        return getChapterList();
    }
}
*/

// Example's answer
let chaptersArray = getChapterList() || [];

//Item 4
chaptersArray.forEach((chapter) => displayList(chapter));

//Item 5
button.addEventListener("click", function () {
    if (input.value.trim() != "") {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = "";
        input.focus();
    } else {
        console.log("No input.");
        input.focus();
    }
})

//Item 6-7
function displayList(item) {
    const chapterItem = document.createElement("li");
    const deleteButton = document.createElement("button");
    chapterItem.textContent = item;
    deleteButton.textContent = "❌"
    deleteButton.classList.add("delete");
    chapterItem.appendChild(deleteButton);
    list.appendChild(chapterItem);
    deleteButton.addEventListener("click", function () {
        list.removeChild(chapterItem);
        deleteChapter(chapterItem.textContent);
        input.focus();
    })
};

//Item 8 
/* First attempt
function setChapterList() {
    JSON.stringify(chaptersArray);
}
*/
//Example's answer 
function setChapterList() {
    localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
}

//Item 9
function getChapterList() {
    return JSON.parse(localStorage.getItem("myFavBOMList"));
}

//Item 10
function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}
/*
//button function before(during week 2 assignment)
buttonBefore.addEventListener("click", function () {
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

});
*/