const addSubject = document.getElementById("add-subject")
const slotSelector = document.getElementById("slot-selector")
const subjectCode = document.getElementById("subject-code")
const outputTable = document.getElementById("output-table")
const filledSlots = []

function highlightSubject() {
    const slotLetter = slotSelector.value.split(" ")[1].toLowerCase();
    if (filledSlots.find(letter => letter === slotLetter)) {
        if (confirm("A subject at this slot already exists! Replace?")) {
        }
        else {
            return;
        }
    }
    const code = subjectCode.value;
    const cellsToEdit = document.querySelectorAll(`#${slotLetter}`)
    for (let cell of cellsToEdit) {
        cell.innerText = code;
        cell.classList.add(`${slotLetter}`)
    } //This loop dont work why?
    filledSlots.push(slotLetter)
}

addSubject.addEventListener("click", highlightSubject)

const darkThemeToggle = document.getElementById("theme-toggler")

darkThemeToggle.addEventListener("click", () => {
    document.body.classList.toggle('dark');
})