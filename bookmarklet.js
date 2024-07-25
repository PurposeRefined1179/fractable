
if (this.document.location.href === "https://erp.iith.ac.in/Default/Pages/Portal/PortalInfrastructure.html") {
    var targetDiv = window.frames[0].document.getElementById("E29CE1EC-E323-44CB-BDE7-232ED47FE8CA");
    var ancestorDiv = targetDiv.parentElement.parentElement.parentElement;
    var secondChildDiv = ancestorDiv.children[1];
    var elementsWithPlbId = Array.from(secondChildDiv.querySelectorAll('[id^="plb"]'));
    var subjectCodeRegex = /[A-Z]{2}\d{4}/;
    var statusSelectedRegex = /Status\s*SELECTED/;
    var slotRegex = /Slot\s*([A-Z])/;
    var outputQuery = "";
    elementsWithPlbId.forEach(function (element) {
        if (statusSelectedRegex.test(element.innerText)) {
            var newObject = { subjectCodeText: "", slotLetter: "" };
            var subjectCodeMatch = element.innerText.match(subjectCodeRegex);
            var slotMatch = element.innerText.match(slotRegex);
            if (subjectCodeMatch && slotMatch) {
                outputQuery += `?${subjectCodeMatch[0]}&${slotMatch[1]}`
            }
        }
    });
    this.document.location.href = "127.0.0.1:5500/main.html" + outputQuery;
}