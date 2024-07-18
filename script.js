const addSubject = document.getElementById("add-subject")
const slotSelector = document.getElementById("slot-selector")
const subjectCode = document.getElementById("subject-code")
const outputTable = document.getElementById("output-table")
const filledSlots = []

function askConfirmation(string) {
    if (confirm(string)) {
            
    }
    else {
        return;
    }
}

function highlightSubject() {
    const slotLetter = slotSelector.value.split(" ")[1].toLowerCase();
    
    if (filledSlots.find(letter => letter === slotLetter)) 
        askConfirmation("A subject at this slot already exists. Replace?")
    
    if(subjectCode.value === "")
        askConfirmation("Subject code empty. Continue?")
    
    const code = subjectCode.value;
    const cellsToEdit = document.querySelectorAll(`#${slotLetter}`)
    for (let cell of cellsToEdit) {
        cell.innerText = code;
        cell.classList.add(`${slotLetter}`)
    }
    filledSlots.push(slotLetter)
}

addSubject.addEventListener("click", highlightSubject)

const darkThemeToggle = document.getElementById("theme-toggler")
const svgLightMode = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon"> <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg>'

const svgDarkMode = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>'

darkThemeToggle.addEventListener("click", () => {
    document.body.classList.toggle('dark');
    const isDarkMode = document.body.classList.contains('dark');
    darkThemeToggle.innerHTML = isDarkMode ? svgDarkMode : svgLightMode;
})