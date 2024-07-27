
const addCourse = document.getElementById("add-course")

const slotSelectorDOM = document.getElementById("slot-selector")

const courseCodeDOM = document.getElementById("course-code")
const outputTable = document.getElementById("output-table")
const courses = document.getElementById("courses")

const slotData = [{
    slot: "a",
    courseCode: "",
    classTimings: [{ day: "Monday", time: "09.00 - 09.55" },
    { day: "Wednesday", time: "11.00 - 11.55" },
    { day: "Thursday", time: "10.00 - 10.55" }
    ],
    conflicts: ["fn1", "fn3", "fn4"]
},
{
    slot: "b",
    courseCode: "",
    classTimings: [{ day: "Monday", time: "10.00 - 10.55" },
        { day: "Wednesday", time: "09.00 - 09.55" },
        { day: "Thursday", time: "11.00 - 11.55" }
    ],
    conflicts: ["fn1", "fn3", "fn4"]
},
{
    slot: "c",
    courseCode: "",
    classTimings: [{ day: "Monday", time: "11.00 - 11.55" },
        { day: "Wednesday", time: "10.00 - 10.55" },
        { day: "Thursday", time: "09.00 - 09.55" }
    ],
    conflicts: ["fn1", "fn3", "fn4"]
},
{
    slot: "d",
    courseCode: "",
    classTimings: [{ day: "Monday", time: "12.00 - 12.55" },
        { day: "Tuesday", time: "09.00 - 09.55" },
        { day: "Friday", time: "11.00 - 11.55" }
    ],
    conflicts: ["fn2", "fn5"]
},
{
    slot: "e",
    courseCode: "",
    classTimings: [{ day: "Tuesday", time: "10.00 - 10.55" },
        { day: "Thursday", time: "12.00 - 12.55" },
        { day: "Friday", time: "09.00 - 09.55" }
    ],
    conflicts: ["fn2", "fn5"]
},
{
    slot: "f",
    courseCode: "",
    classTimings: [{ day: "Tuesday", time: "11.00 - 11.55" },
    { day: "Wednesday", time: "14.30 - 15.55" },
    { day: "Friday", time: "10.00 - 10.55" }
    ],
    conflicts: ["fn2", "fn5"]
},
{
    slot: "g",
    courseCode: "",
    classTimings: [{ day: "Tuesday", time: "12.00 - 12.55" },
    { day: "Wednesday", time: "12.00 - 11.55" },
    { day: "Friday", time: "12.00 - 12.55" }
    ],
    conflicts: []
},
{
    slot: "p",
    courseCode: "",
    classTimings: [{ day: "Monday", time: "14.30 - 15.55" },
    { day: "Thursday", time: "16.00 - 17.25" }
    ],
    conflicts: ["an1", "an4"]
},
{
    slot: "q",
    courseCode: "",
    classTimings: [{ day: "Monday", time: "16.00 - 17.25" },
    { day: "Thursday", time: "14.30 - 15.55" }
    ],
    conflicts: ["an1", "an4"]
},
{
    slot: "r",
    courseCode: "",
    classTimings: [{ day: "Tuesday", time: "14.30 - 15.55" },
    { day: "Friday", time: "16.00 - 17.25" }
    ],
    conflicts: ["an2", "an5"]
},
{
    slot: "s",
    courseCode: "",
    classTimings: [{ day: "Tuesday", time: "16.00 - 17.25" },
    { day: "Friday", time: "14.30 - 15.55" }
    ],
    conflicts: ["an2", "an5"]
},
{
    slot: "fn1",
    courseCode: "",
    classTimings: [{ day: "Monday", time: "09.00 - 11.25" }],
    conflicts: ["a", "b", "c"]
},
{
    slot: "fn2",
    courseCode: "",
    classTimings: [{ day: "Tuesday", time: "09.00 - 11.25" }],
    conflicts: ["d", "e", "f"]
},
{
    slot: "fn3",
    courseCode: "",
    classTimings: [{ day: "Wednesday", time: "09.00 - 11.25" }],
    conflicts: ["b", "c", "a"]
},
{
    slot: "fn4",
    courseCode: "",
    classTimings: [{ day: "Thursday", time: "09.00 - 11.25" }],
    conflicts: ["c", "a", "b"]
},
{
    slot: "fn5",
    courseCode: "",
    classTimings: [{ day: "Friday", time: "09.00 - 11.25" }],
    conflicts: ["e", "f", "d"]
},
{
    slot: "an1",
    courseCode: "",
    classTimings: [{ day: "Monday", time: "14.30 - 17.25" }],
    conflicts: ["p", "q"]
},
{
    slot: "an2",
    courseCode: "",
    classTimings: [{ day: "Tuesday", time: "14.30 - 17.25" }],
    conflicts: ["r", "s"]
},
{
    slot: "an3",
    courseCode: "",
    classTimings: [{ day: "Wednesday", time: "14.30 - 17.25" }]
},
{
    slot: "an4",
    courseCode: "",
    classTimings: [{ day: "Thursday", time: "14.30 - 17.25" }],
    conflicts: ["q", "p"]

},
{
    slot: "an5",
    courseCode: "",
    classTimings: [{ day: "Friday", time: "14.30 - 17.25" }],
    conflicts: ["s", "r"]
},

]

const highlightSubject = (courseCode, courseSlot) => {
    const cellsToEdit = document.querySelectorAll(`#${courseSlot}`);
    for (let cell of cellsToEdit) {
        cell.innerText = courseCode;
        cell.classList.add(`${courseSlot}`);
    }
}

const addNs = (courseSlot = "") => {
    switch(courseSlot) {
        case "fn1":
            hideConflictingSlots('#a #b #c');
            
    }
}

const hideConflictingSlots = (slotLetters) => {
    slotLetters.forEach(slotLetter => {
        const huihui = document.querySelectorAll("#" + slotLetter)
        huihui.forEach(element => element.classList.add("hidden"));
    })
    
    
    const courseList = slotLetters.map(slotLetter => slotData.find(course => course.slot === slotLetter)) 
    
    console.log(courseList)
    courseList.forEach(courseListItem => {
        const toAddBack = courseListItem.conflicts;
        //toAddBack is an array, ok?
        toAddBack.forEach(e => {
            const chan = document.querySelectorAll("#" + e)
            chan.forEach(element => {element.classList.remove("hidden")})
        })
    })
    return;
}

function addSlot(courseCodeElement, courseSlotElement) {
    const courseCode = courseCodeElement.value;
    const courseSlot = courseSlotElement.value.split(" ")[1].toLowerCase();
    const slotToAdd = slotData.find(subject => subject.slot === courseSlot)

    if (slotToAdd.courseCode !== "") {
        if (!askConfirmation("A course at this slot already exists. Replace?")) {
            return;
        }
    }
    slotToAdd.courseCode = courseCode;
    hideConflictingSlots(slotToAdd.conflicts)
    if (courseCode === "") {
        if (!askConfirmation("Course code empty. Continue?")) {
            return;
        }hideConflictingSlots
    }

    highlightSubject(courseCode, courseSlot);
}

function removeSlot(slot) {

}

addCourse.addEventListener("click", () => addSlot(courseCodeDOM, slotSelectorDOM))


// Other functionalities
function askConfirmation(string) {
    return confirm(string);
}

// Auto focus to Subject Code input on loading
window.onload = function () {
    document.getElementById('course-code').focus();
};

//Press Enter to add course
courseCodeDOM.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && document.activeElement === courseCodeDOM) {
        event.preventDefault();
        addSlot(courseCodeDOM, slotSelectorDOM);
    }
})

//For Bookmarklet
const urlParams = window.location.search;
if (urlParams) {
    const inputs = urlParams.split("?")
    inputs.shift()    
    for (const input of inputs) {
        const inputArray = input.split("&")
        highlightSubject(inputArray[0], inputArray[1].toLowerCase())
    }
}