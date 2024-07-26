
const addSubject = document.getElementById("add-subject")

const slotSelectorDOM = document.getElementById("slot-selector")

const subjectCodeDOM = document.getElementById("subject-code")
const outputTable = document.getElementById("output-table")
const courses = document.getElementById("courses")

const slotData = [{
    slot: "a",
    subjectCode: "",
    classTimings: [{ day: "Monday", time: "09.00 - 09.55" },
    { day: "Wednesday", time: "11.00 - 11.55" },
    { day: "Thursday", time: "10.00 - 10.55" }
    ]
},
{
    slot: "b",
    subjectCode: "",
    classTimings: [{ day: "Monday", time: "10.00 - 10.55" },
    { day: "Wednesday", time: "09.00 - 09.55" },
    { day: "Thursday", time: "11.00 - 11.55" }
    ]
},
{
    slot: "c",
    subjectCode: "",
    classTimings: [{ day: "Monday", time: "11.00 - 11.55" },
    { day: "Wednesday", time: "10.00 - 10.55" },
    { day: "Thursday", time: "09.00 - 09.55" }
    ]
},
{
    slot: "d",
    subjectCode: "",
    classTimings: [{ day: "Monday", time: "12.00 - 12.55" },
    { day: "Tuesday", time: "09.00 - 09.55" },
    { day: "Friday", time: "11.00 - 11.55" }
    ]
},
{
    slot: "e",
    subjectCode: "",
    classTimings: [{ day: "Tuesday", time: "10.00 - 10.55" },
    { day: "Thursday", time: "12.00 - 12.55" },
    { day: "Friday", time: "09.00 - 09.55" }
    ]
},
{
    slot: "f",
    subjectCode: "",
    classTimings: [{ day: "Tuesday", time: "11.00 - 11.55" },
    { day: "Wednesday", time: "14.30 - 15.55" },
    { day: "Friday", time: "10.00 - 10.55" }
    ]
},
{
    slot: "g",
    subjectCode: "",
    classTimings: [{ day: "Tuesday", time: "12.00 - 12.55" },
    { day: "Wednesday", time: "12.00 - 11.55" },
    { day: "Friday", time: "12.00 - 12.55" }
    ]
},
{
    slot: "p",
    subjectCode: "",
    classTimings: [{ day: "Monday", time: "14.30 - 15.55" },
    { day: "Thursday", time: "16.00 - 17.25" }
    ]
},
{
    slot: "q",
    subjectCode: "",
    classTimings: [{ day: "Monday", time: "16.00 - 17.25" },
    { day: "Thursday", time: "14.30 - 15.55" }
    ]
},
{
    slot: "r",
    subjectCode: "",
    classTimings: [{ day: "Tuesday", time: "14.30 - 15.55" },
    { day: "Friday", time: "16.00 - 17.25" }
    ]
},
{
    slot: "s",
    subjectCode: "",
    classTimings: [{ day: "Tuesday", time: "16.00 - 17.25" },
    { day: "Friday", time: "14.30 - 15.55" }
    ]
},
{
    slot: "fn1",
    subjectCode: "",
    classTimings: [{ day: "Monday", time: "09.00 - 11.25" }]
},
{
    slot: "fn2",
    subjectCode: "",
    classTimings: [{ day: "Tuesday", time: "09.00 - 11.25" }]
},
{
    slot: "fn3",
    subjectCode: "",
    classTimings: [{ day: "Wednesday", time: "09.00 - 11.25" }]
},
{
    slot: "fn4",
    subjectCode: "",
    classTimings: [{ day: "Thursday", time: "09.00 - 11.25" }]
},
{
    slot: "fn5",
    subjectCode: "",
    classTimings: [{ day: "Friday", time: "09.00 - 11.25" }]
},
{
    slot: "an1",
    subjectCode: "",
    classTimings: [{ day: "Monday", time: "14.30 - 17.25" }]
},
{
    slot: "an2",
    subjectCode: "",
    classTimings: [{ day: "Tuesday", time: "14.30 - 17.25" }]
},
{
    slot: "an3",
    subjectCode: "",
    classTimings: [{ day: "Wednesday", time: "14.30 - 17.25" }]
},
{
    slot: "an4",
    subjectCode: "",
    classTimings: [{ day: "Thursday", time: "14.30 - 17.25" }]
},
{
    slot: "an5",
    subjectCode: "",
    classTimings: [{ day: "Friday", time: "14.30 - 17.25" }]
},

]

const nToggle = document.getElementById("n-toggle")

nToggle.addEventListener("change", () => {
    const nToggleElements = document.querySelectorAll(".toggle_n");

    nToggleElements.forEach(element => {
        if (element.getAttribute("rowspan") === "2") {
            element.setAttribute("rowspan", "1");
        } else {
            element.setAttribute("rowspan", "2");
        }
    });

    const n_elements = document.querySelectorAll(`td[id*="n"]`);
    n_elements.forEach(element => {
        element.classList.toggle("hidden");
    });
})

function uncheck() {
    nToggle.checked = false
    const nToggleElements = document.querySelectorAll(".toggle_n");

    nToggleElements.forEach(element => element.setAttribute("rowspan", "2"));

    const n_elements = document.querySelectorAll(`td[id*="n"]`);
    n_elements.forEach(element => {
        element.classList.remove("hidden");
    });
}

highlightSubject = (subjectCode, subjectSlot) => {
    const cellsToEdit = document.querySelectorAll(`#${subjectSlot}`);
    for (let cell of cellsToEdit) {
        cell.innerText = subjectCode;
        cell.classList.add(`${subjectSlot}`);
    }
}
const queryString = window.location.search;
console.log(queryString)
if (queryString) {
    const inputs = queryString.split("?")
    inputs.shift()
    console.log(inputs)

    for (const input of inputs) {
        const inputArray = input.split("&")
        console.log(inputArray[0]);
        highlightSubject(inputArray[0], inputArray[1].toLowerCase())
    }
}

function addSlot(subjectCodeElement, subjectSlotElement) {
    const subjectCode = subjectCodeElement.value;
    const subjectSlot = subjectSlotElement.value.split(" ")[1].toLowerCase();
    const slotToAdd = slotData.find(subject => subject.slot === subjectSlot)

    const regex = /n\d/
    if (regex.test(subjectSlot)) {
        console.log("hiii")
        uncheck()
    }

    if (slotToAdd.subjectCode !== "") {
        if (!askConfirmation("A course at this slot already exists. Replace?")) {
            return;
        }
    }
    slotToAdd.subjectCode = subjectCode;

    if (subjectCode === "") {
        if (!askConfirmation("Course code empty. Continue?")) {
            return;
        }
    }

    highlightSubject(subjectCode, subjectSlot);
}

function removeSlot(slot) {

}

addSubject.addEventListener("click", () => addSlot(subjectCodeDOM, slotSelectorDOM))
subjectCodeDOM.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && document.activeElement === subjectCodeDOM) {
        event.preventDefault(); // Prevent default Enter key action (e.g., form submission)
        addSlot(subjectCodeDOM, slotSelectorDOM); // Call addSlot function
    }
})


// Other functionalities
function askConfirmation(string) {
    return confirm(string);
}

// Auto focus to Subject Code input on loading
window.onload = function () {
    document.getElementById('subject-code').focus();
};

// Toggle between Light and Dark Theme
const darkThemeToggle = document.getElementById("theme-toggler")
const svgLightMode = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon"> <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg>'

const svgDarkMode = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>'

darkThemeToggle.addEventListener("click", () => {
    document.body.classList.toggle('dark');
    const isDarkMode = document.body.classList.contains('dark');
    darkThemeToggle.innerHTML = isDarkMode ? svgDarkMode : svgLightMode;
})

// Print table; credits: chatGPT
const printTableButton = document.getElementById("print-table");

printTableButton.addEventListener("click", function () {
    const printWindow = window.open("", "_blank");
    printWindow.document.write(`
        <html>
        <head>
            <title>Print</title>
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet">
            <link rel="stylesheet" href="./styles/styles.css">
            <link rel="stylesheet" href="./styles/colors.css">
            <link rel="stylesheet" href="./styles/to-do.css">
        </head>
        <body>
            <h1>Semester Timetable</h1>
            ${outputTable.outerHTML}
        </body>
        </html>
    `);
    printWindow.document.close();
    setTimeout(function () {
        printWindow.print();
        printWindow.close();
    }, 1000);
});

// JavaScript code for the bookmarklet
const bookmarkletCode = `
  (() => {
    if ("https://erp.iith.ac.in/Default/Pages/Portal/PortalInfrastructure.html" === this.document.location.href) {
      var targetDiv = window.frames[0].document.getElementById("E29CE1EC-E323-44CB-BDE7-232ED47FE8CA"),
          ancestorDiv = targetDiv.parentElement.parentElement.parentElement,
          secondChildDiv = ancestorDiv.children[1],
          elementsWithPlbId = Array.from(secondChildDiv.querySelectorAll('[id^="plb"]')),
          subjectCodeRegex = /[A-Z]{2}\\d{4}/,
          statusSelectedRegex = /Status\\s*SELECTED/,
          slotRegex = /Slot\\s*([A-Z])/,
          outputQuery = "";

      elementsWithPlbId.forEach(function (e) {
        if (statusSelectedRegex.test(e.innerText)) {
          var t = e.innerText.match(subjectCodeRegex),
              r = e.innerText.match(slotRegex);
          if (t && r) {
            outputQuery += \`?\${t[0]}&\${r[1]}\`;
          }
        }
      });

      this.document.location.href = "127.0.0.1:5500/main.html" + outputQuery;
    }
  })();
`;

// Encode the JavaScript code


// Set the href attribute of the anchor element with the ID "bookmarklet"
const bookmarklet = document.getElementById("bookmarklet");
bookmarklet.href = `javascript:(() => {if("https://erp.iith.ac.in/Default/Pages/Portal/PortalInfrastructure.html"===this.document.location.href&&"complete"===document.readyState){var targetDiv=window.frames[0].document.getElementById("E29CE1EC-E323-44CB-BDE7-232ED47FE8CA"),ancestorDiv=targetDiv.parentElement.parentElement.parentElement,secondChildDiv=ancestorDiv.children[1],elementsWithPlbId=Array.from(secondChildDiv.querySelectorAll('[id^="plb"]')),subjectCodeRegex=/[A-Z]{2}\\d{4}/,statusSelectedRegex=/Status\\s*SELECTED/,slotRegex=/Slot\\s*([A-Z])/,outputQuery="";elementsWithPlbId.forEach((function(e){if(statusSelectedRegex.test(e.innerText)){var t=e.innerText.match(subjectCodeRegex),n=e.innerText.match(slotRegex);t&&n&&(outputQuery+=\`?\${t[0]}&\${n[1]}\`)}}));const e="https://purposerefined1179.github.io/fractable/main.html";window.open(e+outputQuery)}})();`;
