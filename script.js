
const addSubject = document.getElementById("add-subject")

const slotSelectorDOM = document.getElementById("slot-selector")

const subjectCodeDOM = document.getElementById("subject-code")
const outputTable = document.getElementById("output-table")

const slotData = [{
    slot: "a",
    subjectCode: ""
},
{
    slot: "b",
    subjectCode: ""
},
{
    slot: "c",
    subjectCode: ""
},
{
    slot: "d",
    subjectCode: ""
},
{
    slot: "e",
    subjectCode: ""
},
{
    slot: "f",
    subjectCode: ""
},
{
    slot: "g",
    subjectCode: ""
},
{
    slot: "p",
    subjectCode: ""
},
{
    slot: "q",
    subjectCode: ""
},
{
    slot: "r",
    subjectCode: ""
},
{
    slot: "s",
    subjectCode: ""
},

]

function highlightSubject(subjectCode, subjectSlot) {
    const cellsToEdit = document.querySelectorAll(`#${subjectSlot}`);
    for (let cell of cellsToEdit) {
        cell.innerText = subjectCode;
        cell.classList.add(`${subjectSlot}`);
    }
}

function askConfirmation(string) {
    return confirm(string);
}
function addSlot(subjectCodeElement, subjectSlotElement) {
    const subjectCode = subjectCodeElement.value;
    const subjectSlot = subjectSlotElement.value.split(" ")[1].toLowerCase();
    const slotToAdd = slotData.find(subject => subject.slot === subjectSlot)

    if (slotToAdd.subjectCode !== "") {
        if (!askConfirmation("A subject at this slot already exists. Replace?")) {
            return;
        }
    }

    if (subjectCode === "") {
        if (!askConfirmation("Subject code empty. Continue?")) {
            return;
        }
    }
    console.log(subjectCode, subjectSlot)

    highlightSubject(subjectCode, subjectSlot);
}

addSubject.addEventListener("click", () => addSlot(subjectCodeDOM, slotSelectorDOM))

// Other functionalities

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
    if (!askConfirmation(`Make sure to change the following according to your needs:
Layout: Landscape (Recommended) / Portrait
Color: BW / Color

More Settings:
    Margins: none (there is a margin added already in html)
    Options: Background Graphics (checked)
    `)) {
        return;
    }
    const printWindow = window.open("", "_blank");
    printWindow.document.write(`
        <html>
        <head>
            <title>Print</title>
                <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet">
    <style>${colorsCss} ${stylesCss}</style>
                </head>
                <body>
                <h1>Semester Timetable</h1>
                ${outputTable.outerHTML}
                </body>
                </html>
                `);
    printWindow.document.close();
    printWindow.print();
    printWindow.close();
});

// Well... sorry

const colorsCss = `:root {
    /* semantic colors */
    --white: #FFFCF0;
    --base-50: #F2F0E5;
    --base-100: #E6E4D9;
    --base-150: #DAD8CE;
    --base-200: #CECDC3;
    --base-300: #B7B5AC;
    --base-500: #878580;
    --base-600: #6F6E69;
    --base-700: #575653;
    --base-800: #403E3C;
    --base-850: #343331;
    --base-900: #282726;
    --base-950: #1C1B1A;

    --black: #100F0F;
    --black-opacity-10: #100F0F10;
    --paper-opacity-10: #FFFCF010;

    --red-400: #D14D41;
    --red-600: #AF3029;
    --orange-400: #DA702C;
    --orange-600: #BC5215;
    --yellow-400: #D0A215;
    --yellow-600: #AD8301;
    --green-400: #879A39;
    --green-600: #66800B;
    --cyan-400: #3AA99F;
    --cyan-600: #24837B;
    --blue-400: #4385BE;
    --blue-600: #205EA6;
    --purple-400: #8B7EC8;
    --purple-600: #5E409D;
    --magenta-400: #CE5D97;
    --magenta-600: #A02F6F;
    --hot-pink-400: #ff204e;
    --hot-pink-600: #ec1f5b;
    --teal-400: #00A8CC;
    --teal-600: #0C7B93;
    --wood-400: #9c763e;
    --wood-600: #DBAFA0;
}

/* table Colors */
:root {
    --on-highlighted-cell: var(--white);
    --a: var(--red-400);

    --b: var(--orange-400);
    --c: var(--yellow-400);
    --d: var(--green-400);
    --e: var(--cyan-400);
    --f: var(--blue-400);
    --g: var(--purple-400);
    --p: var(--magenta-400);
    --q: var(--hot-pink-400);
    --r: var(--teal-400);
    --s: var(--wood-400);
}

.dark {
    --a: var(--red-600);
    --b: var(--orange-600);
    --c: var(--yellow-600);
    --d: var(--green-600);
    --e: var(--cyan-600);
    --f: var(--blue-600);
    --g: var(--purple-600);
    --p: var(--magenta-600);
    --q: var(--hot-pink-600);
    --r: var(--teal-600);
    --s: var(--wood-600);
}`
const stylesCss = `* {
    box-sizing: border-box;
    font-family: "Segoe UI Variable Display", "Inter";
}

:root {
    font-family: "Segoe UI Variable Display", "Inter";

    /* Flexoki Color Scheme */
    --paper: #FFFCF080;
    --text: var(--black);
}



.dark {
    --paper: #1a1818;
    --text: var(--base-50);

}

body {
    padding: var(--body-padding);
    padding-top: calc(var(--body-padding)/var(--h1-line-height));
    margin: 0;
    background-color: var(--paper);
    /* transition: all 0.3s; */
    color: var(--text)
}


:root {
    --theme-toggler-background-color: var(--base-100);
    --theme-toggler-border:1px solid var(--base-300);
    --theme-toggler-svg-color: var(--base-700);
    --theme-toggler-svg-content: something;
}
.dark {
    --theme-toggler-background-color: var(--base-900);
    --theme-toggler-border: 1px solid var(--base-800);
    --theme-toggler-svg-color: var(--base-300);
    --theme-toggler-svg-content: something_else;

}
#theme-toggler {
    position: absolute;
    right: 100px;
    padding: 0.618em;
    background-color: var(--theme-toggler-background-color);
    border: var(--theme-toggler-border);
    border-radius: 900px;
    display: flex;
}

#theme-toggler:hover {
    cursor: pointer;
}

#theme-toggler svg {
    color: var(--theme-toggler-svg-color);
}

/* Input */
:root {
    --add-subject-border: var(--base-200);
    --input-subject-code-border: var(--base-300) ;
    --input-subject-code-text-color: var(--base-900);
    --input-subject-code-placeholder-color: var(--base-800);
    --add-entry-background-color: var(--base-50);
}
.dark {
    --add-subject-border: var(--base-800);
    --input-subject-code-border: var(--base-700) ;
    --input-subject-code-text-color: var(--base-100);
    --input-subject-code-placeholder-color: var(--base-150);
    --add-entry-background-color: var(--base-900);
}

#add-entry {
    border: 1px solid var(--add-subject-border);
    border-radius: 4.235px;
    display: flex;
    width: fit-content;
    padding: 10px;
    gap: 10px;
    background-color: var(--add-entry-background-color);
    margin: auto;
}
.inputs {
    outline: none;
    border: 1px solid var(--input-subject-code-border); 
    border-radius: 3.235px;
    line-height: 1.9;
    padding-left: 0.5em;
    padding-right: 0.5em;
    color: var(--input-subject-code-text-color);
    background-color: var(--paper);
    font-size: 1em;
    /* appearance: none; */
    padding-top: calc(0.2/1.9)em;
    padding-bottom: 0.2em;
}
.inputs::placeholder {
    color: var(--input-subject-code-placeholder-color);
}
.submit-button {
    background-color: #3baba2;
    border:1px solid #038b7f;
    color: white;
}

:root {
    --subject-code-bg: var(--white);
    --subject-code-bg-focus: hsl(54, 100%, 98%);
}

.dark {
    --subject-code-bg: var(--black);
    --subject-code-bg-focus: var(--white);
}
#subject-code {
    background-color: var(--subject-code-bg);
}
#subject-code:focus, .inputs:focus {
    background-color: var(--subject-code-bg-focus);
    box-shadow: 0 0 0 1.21px var(--input-subject-code-border); /* box shadow on focus */
    transition: box-shadow 0.2s ease-in-out;
}

/* Table Cells: Colors */
:root {
    --table-inactive-cells: var(--base-800);
    --table-border: var(--base-100);
    --table-cell-border: var(--base-100);
}

.dark {
    --table-inactive-cells: var(--base-400);
    --table-border: var(--base-800);
    --table-cell-border: var(--base-900);
    --inactive-cells-background-color: var(--black)
}

table * {
    color: var(--table-inactive-cells);
    background-color: var(--inactive-cells-background-color);
    width: auto;
}

table {
    margin: auto;
    margin-top: 4em;
    border-collapse: separate;
}

table td {
    padding: 0.8em 2em;
    margin: auto;
    text-align: center;
}

/* Table Header: Colors */
:root {
    --table-header-background-color: var(--base-150);
    --table-header-color: var(--black)
}

.dark {
    --table-header-background-color: var(--base-900);
    --table-header-color: var(--white)
}

table th {
    font-weight: 500;
    background-color: var(--table-header-background-color);
    color: var(--table-header-color);
    /* border-right-color: transparent; */
    padding: 1em 2em;
}


/* Days: Colors */
:root {
    --table-days-color: var(--base-850);
    --table-days-background-color: var(--base-50);
    --table-right-border: 1.618px solid var(--base-300);

}

.dark {
    --table-days-background-color: var(--base-850);
    --table-right-border: 0.618px solid var(--base-50);
    --table-bottom-border: 0.618px solid var(--base-500);
    --table-days-color: var(--base-100)
}

td.day {
    text-align: left;
    color: var(--table-days-color);
    background-color: var(--table-days-background-color);
    /* border-right: var(--table-right-border); */
    /* border-bottom: var(--table-bottom-border); */
}

/* Rowspan: Colors */
:root {
    --table-rowspan-background-color: var(--base-50);
    --table-rowspan-color: var(--base-700);
}

.dark {
    --table-rowspan-background-color: var(--base-950);
    --table-rowspan-color: var(--base-200);

}

td[rowspan] {
    line-height: 2;
    color: var(--table-rowspan-color);
    background-color: var(--table-rowspan-background-color);
}
td[rowspan], th[rowspan] {
    padding-right: 12px;
    padding-left: 12px;

}

td[rowspan] svg {
    background-color: transparent;
    
}

.vertical-text {

    writing-mode: vertical-rl;
    text-orientation: upright;
    text-transform: uppercase;
    letter-spacing: 0.6em;
}




.classes {
    display: flex;
    flex-wrap: wrap;
    column-gap: 0.618em;
}
h2 {
    width: 100%;
}
.class {
    border: 1px solid var(--add-subject-border);
    display: flex;
    width: fit-content;
    padding: 10px;
    gap: 10px;
}



.a,
.b,
.c,
.d,
.e,
.f,
.g,
.p,
.q,
.r,
.s {
    font-weight: 500;
}

.a {
    background-color: var(--a);
    color: var(--on-highlighted-cell);
}

.b {
    background-color: var(--b);
    color: var(--on-highlighted-cell);
}

.c {
    background-color: var(--c);
    color: var(--on-highlighted-cell);
}

.d {
    background-color: var(--d);
    color: var(--on-highlighted-cell);
}

.e {
    background-color: var(--e);
    color: var(--on-highlighted-cell);
}

.f {
    background-color: var(--f);
    color: var(--on-highlighted-cell);
}

.g {
    background-color: var(--g);
    color: var(--on-highlighted-cell);
}

.p {
    background-color: var(--p);
    color: var(--on-highlighted-cell);
}

.q {
    background-color: var(--q);
    color: var(--on-highlighted-cell);
}

.r {
    background-color: var(--r);
    color: var(--on-highlighted-cell);
}

.s {
    background-color: var(--s);
    color: var(--on-highlighted-cell);
}

:root {
    /* Typography */
    --body-padding: 4.235em;

    --h1-line-height: 1.129;
    --h1-font-weight: 700;
    --h1-font-size: 2.235em;
    --h1-letter-spacing: -0.022em;

    --h2-line-height: 1.129;
    --h2-font-weight: 500;
    --h2-font-size: 1.618em;
    --h2-letter-spacing: -0.022em;

    --input-line-height: 1.618;
    --input-font-weight: 400;
    --input-font-size: 1.129em;
    --input-letter-spacing: -0.017em;

    --input-subject-code-font-size: 1.129em;
    --input-subject-name-font-size: 0.78em;
}

h1 {
    font-size: var(--h1-font-size);
    line-height: var(--h1-line-height);
    font-weight: var(--h1-font-weight);
    letter-spacing: var(--h1-letter-spacing);
    margin-top: 0;
    margin-bottom: 1.618em;
    /* margin: auto; */
}

h2 {
    font-size: var(--h2-font-size);
    line-height: var(--h2-line-height);
    font-weight: var(--h2-font-weight);
    letter-spacing: var(--h2-letter-spacing);
    margin-top: 1em;
}

table {
    border-collapse: separate;
    border-spacing: 0;
}

table tr th,
table tr td {
    border-right: 1px solid var(--table-border);
    border-bottom: 1px solid var(--table-border);
}

table tr th:not(:last-of-type) {
    border-right: none;
}

table tr th:first-child,
table tr td:first-child {
    border-left: 1px solid var(--table-border);
}

table tr th {
    border-top: solid 1px var(--table-border);
}

/* top-left border-radius */
table tr:first-child th:first-child {
    border-top-left-radius: 6px;
}

/* top-right border-radius */
table tr:first-child th:last-child {
    border-top-right-radius: 6px;
}

/* bottom-left border-radius */
table tr:last-child td:first-child {
    border-bottom-left-radius: 6px;
}

/* bottom-right border-radius */
table tr:last-child td:last-child {
    border-bottom-right-radius: 6px;
}

:root {
    --link-color: black;
}
.dark {
    --link-color: white;
}

a {
    color: var(--link-color);
}`
