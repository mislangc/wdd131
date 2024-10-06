const enrollButton = document.querySelector("#enrollStudent");
const dropButton = document.querySelector("#dropStudent");

const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        {
            sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'
        },
        {
            sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'
        }
    ],
    enrollStudent: function (sectionNum) {
        const sectionIndex = this.sections.findIndex((section) =>
            section.sectionNum == sectionNum
        );
        if (this.sections[sectionIndex]) {
            this.sections[sectionIndex].enrolled += 1;
        }
        outputSections(this.sections);
    },
    dropStudent: function (sectionNum) {
        const sectionIndex = this.sections.findIndex((section) =>
            section.sectionNum == sectionNum
        );
        if (this.sections[sectionIndex]) {
            this.sections[sectionIndex].enrolled -= 1;
        }
        outputSections(this.sections);
    },
    modifyEnrollment: function (sectionNum, add = true) {
        const sectionIndex = this.sections.findIndex((section) =>
            section.sectionNum == sectionNum
        );
        if (this.sections[sectionIndex]) {
            if (add) {
                this.sections[sectionIndex].enrolled += 1;
            } else {
                this.sections[sectionIndex].enrolled -= 1;
            }
            outputSections(this.sections);
        }
    }
};

function setCourse(course) {
    document.querySelector("#courseName").innerHTML = `${course.name}`;
    document.querySelector("#courseCode").innerHTML = `${course.code}`;
}

function outputSections(sections) {
    const sectionList = sections.map((section) =>
        `<tr>
                <th>${section.sectionNum}</th>
                <th>${section.roomNum}</th>
                <th>${section.enrolled}</th>
                <th>${section.days}</th>
                <th>${section.instructor}r</th>
            </tr>`
    );
    document.querySelector("#sections").innerHTML = sectionList.join("");
}

setCourse(aCourse);
enrollButton.addEventListener("click", function () {
    const theSection = document.querySelector("#sectionNumber").value;
    aCourse.modifyEnrollment(theSection);
});
dropButton.addEventListener("click", function () {
    const theSection = document.querySelector("#sectionNumber").value;
    aCourse.modifyEnrollment(theSection, false);
});

