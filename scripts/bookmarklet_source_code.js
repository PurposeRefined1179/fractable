//Un-minified code for bookmarklet

if (this.document.location.href === "https://erp.iith.ac.in/Default/Pages/Portal/PortalInfrastructure.html" && (document.readyState === "complete")) {
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
    const fractable = "https://purposerefined1179.github.io/fractable/main.html"
    window.open(fractable + outputQuery)
}

// //Minified javascript
javascript:(() => {if("https://erp.iith.ac.in/Default/Pages/Portal/PortalInfrastructure.html"===this.document.location.href&&"complete"===document.readyState){var targetDiv=window.frames[0].document.getElementById("E29CE1EC-E323-44CB-BDE7-232ED47FE8CA"),ancestorDiv=targetDiv.parentElement.parentElement.parentElement,secondChildDiv=ancestorDiv.children[1],elementsWithPlbId=Array.from(secondChildDiv.querySelectorAll('[id^="plb"]')),subjectCodeRegex=/[A-Z]{2}\d{4}/,statusSelectedRegex=/Status\s*SELECTED/,slotRegex=/Slot\s*([A-Z])/,outputQuery="";elementsWithPlbId.forEach((function(e){if(statusSelectedRegex.test(e.innerText)){var t=e.innerText.match(subjectCodeRegex),n=e.innerText.match(slotRegex);t&&n&&(outputQuery+=`?${t[0]}&${n[1]}`)}}));const e="https://purposerefined1179.github.io/fractable/main.html";window.open(e+outputQuery)}})();