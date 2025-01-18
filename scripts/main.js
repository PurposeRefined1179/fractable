
const addCourse = document.getElementById("add-course")

const slotSelectorDOM = document.getElementById("slot-selector")

const courseCodeDOM = document.getElementById("course-code")
const outputTable = document.getElementById("output-table")
const courses = document.getElementById("courses")

const segmentDates = {
  "1-2": { start: new Date('2023-01-01'), end: new Date('2023-02-28') },
  "3-4": { start: new Date('2023-03-01'), end: new Date('2023-04-30') },
  "5-6": { start: new Date('2023-05-01'), end: new Date('2023-06-30') }
};

const slotData = [
  {
    slot: "a",
    courseCode: "",
    courseName: "",
    credits: 0,
    instructors: [],
    classTimings: [
      { day: "Monday", time: "09.00 - 09.55" },
      { day: "Wednesday", time: "11.00 - 11.55" },
      { day: "Thursday", time: "10.00 - 10.55" }
    ],
    conflicts: ["fn1", "fn3", "fn4"],
    segments: []
  },
  {
    slot: "b",
    courseCode: "",
    courseName: "",
    credits: 0,
    instructors: [],
    classTimings: [
      { day: "Monday", time: "10.00 - 10.55" },
      { day: "Wednesday", time: "09.00 - 09.55" },
      { day: "Thursday", time: "11.00 - 11.55" }
    ],
    conflicts: ["fn1", "fn3", "fn4"],
    segments: []
  },
  {
    slot: "c",
    courseCode: "",
    courseName: "",
    credits: 0,
    instructors: [],
    classTimings: [
      { day: "Monday", time: "11.00 - 11.55" },
      { day: "Wednesday", time: "10.00 - 10.55" },
      { day: "Thursday", time: "09.00 - 09.55" }
    ],
    conflicts: ["fn1", "fn3", "fn4"],
    segments: []
  },
  {
    slot: "d",
    courseCode: "",
    courseName: "",
    credits: 0,
    instructors: [],
    classTimings: [
      { day: "Monday", time: "12.00 - 12.55" },
      { day: "Tuesday", time: "09.00 - 09.55" },
      { day: "Friday", time: "11.00 - 11.55" }
    ],
    conflicts: ["fn2", "fn5"],
    segments: []
  },
  {
    slot: "e",
    courseCode: "",
    courseName: "",
    credits: 0,
    instructors: [],
    classTimings: [
      { day: "Tuesday", time: "10.00 - 10.55" },
      { day: "Thursday", time: "12.00 - 12.55" },
      { day: "Friday", time: "09.00 - 09.55" }
    ],
    conflicts: ["fn2", "fn5"],
    segments: []
  },
  {
    slot: "f",
    courseCode: "",
    courseName: "",
    credits: 0,
    instructors: [],
    classTimings: [
      { day: "Tuesday", time: "11.00 - 11.55" },
      { day: "Wednesday", time: "14.30 - 15.55" },
      { day: "Friday", time: "10.00 - 10.55" }
    ],
    conflicts: ["fn2", "fn5"],
    segments: []
  },
  {
    slot: "g",
    courseCode: "",
    courseName: "",
    credits: 0,
    instructors: [],
    classTimings: [
      { day: "Tuesday", time: "12.00 - 12.55" },
      { day: "Wednesday", time: "12.00 - 11.55" },
      { day: "Friday", time: "12.00 - 12.55" }
    ],
    conflicts: [],
    segments: []
  },
  {
    slot: "p",
    courseCode: "",
    courseName: "",
    credits: 0,
    instructors: [],
    classTimings: [
      { day: "Monday", time: "14.30 - 15.55" },
      { day: "Thursday", time: "16.00 - 17.25" }
    ],
    conflicts: ["an1", "an4"],
    segments: []
  },
  {
    slot: "q",
    courseCode: "",
    courseName: "",
    credits: 0,
    instructors: [],
    classTimings: [
      { day: "Monday", time: "16.00 - 17.25" },
      { day: "Thursday", time: "14.30 - 15.55" }
    ],
    conflicts: ["an1", "an4"],
    segments: []
  },
  {
    slot: "r",
    courseCode: "",
    courseName: "",
    credits: 0,
    instructors: [],
    classTimings: [
      { day: "Tuesday", time: "14.30 - 15.55" },
      { day: "Friday", time: "16.00 - 17.25" }
    ],
    conflicts: ["an2", "an5"],
    segments: []
  },
  {
    slot: "s",
    courseCode: "",
    courseName: "",
    credits: 0,
    instructors: [],
    classTimings: [
      { day: "Tuesday", time: "16.00 - 17.25" },
      { day: "Friday", time: "14.30 - 15.55" }
    ],
    conflicts: ["an2", "an5"],
    segments: []
  },
  {
    slot: "fn1",
    courseCode: "",
    courseName: "",
    credits: 0,
    instructors: [],
    classTimings: [
      { day: "Monday", time: "09.00 - 11.25" }
    ],
    conflicts: ["a", "b", "c"],
    segments: []
  },
  {
    slot: "fn2",
    courseCode: "",
    courseName: "",
    credits: 0,
    instructors: [],
    classTimings: [
      { day: "Tuesday", time: "09.00 - 11.25" }
    ],
    conflicts: ["d", "e", "f"],
    segments: []
  },
  {
    slot: "fn3",
    courseCode: "",
    courseName: "",
    credits: 0,
    instructors: [],
    classTimings: [
      { day: "Wednesday", time: "09.00 - 11.25" }
    ],
    conflicts: ["b", "c", "a"],
    segments: []
  },
  {
    slot: "fn4",
    courseCode: "",
    courseName: "",
    credits: 0,
    instructors: [],
    classTimings: [
      { day: "Thursday", time: "09.00 - 11.25" }
    ],
    conflicts: ["c", "a", "b"],
    segments: []
  },
  {
    slot: "fn5",
    courseCode: "",
    courseName: "",
    credits: 0,
    instructors: [],
    classTimings: [
      { day: "Friday", time: "09.00 - 11.25" }
    ],
    conflicts: ["e", "f", "d"],
    segments: []
  },
  {
    slot: "an1",
    courseCode: "",
    courseName: "",
    credits: 0,
    instructors: [],
    classTimings: [
      { day: "Monday", time: "14.30 - 17.25" }
    ],
    conflicts: ["p", "q"],
    segments: []
  },
  {
    slot: "an2",
    courseCode: "",
    courseName: "",
    credits: 0,
    instructors: [],
    classTimings: [
      { day: "Tuesday", time: "14.30 - 17.25" }
    ],
    conflicts: ["r", "s"],
    segments: []
  },
  {
    slot: "an3",
    courseCode: "",
    courseName: "",
    credits: 0,
    instructors: [],
    classTimings: [
      { day: "Wednesday", time: "14.30 - 17.25" }
    ],
    conflicts: [],
    segments: []
  },
  {
    slot: "an4",
    courseCode: "",
    courseName: "",
    credits: 0,
    instructors: [],
    classTimings: [
      { day: "Thursday", time: "14.30 - 17.25" }
    ],
    conflicts: ["q", "p"],
    segments: []
  },
  {
    slot: "an5",
    courseCode: "",
    courseName: "",
    credits: 0,
    instructors: [],
    classTimings: [
      { day: "Friday", time: "14.30 - 17.25" }
    ],
    conflicts: ["s", "r"],
    segments: []
  }
];

const highlightSubject = (courseCode, courseSlot) => {
  const cellsToEdit = document.querySelectorAll(`#${courseSlot}`);
  for (let cell of cellsToEdit) {
    cell.innerText = courseCode;
    cell.classList.add(`${courseSlot}`);
  }
}

const addNs = (courseSlot = "") => {
  switch (courseSlot) {
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
      chan.forEach(element => { element.classList.remove("hidden") })
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
    } hideConflictingSlots
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


// toggle theme using keyboard shortcut
document.addEventListener("keydown", (event) => {
  if (event.key === "d" && document.activeElement.tagName !== "INPUT") {
    document.body.classList.toggle("dark");
  }
})

// theme should match system theme by default and update on system theme change
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
  if (e.matches) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }
});


// make all h2 level headings collapsible and add an arrow  to indicate collapsibility
const h2s = document.querySelectorAll("h2");
h2s.forEach(h2 => {
  h2.innerHTML = `<span class="collapsible-arrow"><i class="icon-chevron-right"></i></span> ${h2.innerHTML}`
  h2.addEventListener("click", () => {
    h2.nextElementSibling.classList.toggle("hidden");
    h2.querySelector(".collapsible-arrow").textContent = h2.nextElementSibling.classList.contains("hidden") ? "▶" : "▼";
  })
})


