// Print table; credits: chatGPT
const printTableButton = document.getElementById("print-table");

printTableButton.addEventListener("click", function () {
    const printWindow = window.open("", "_blank");
    printWindow.document.write(`
        <html>
        <head>
            <title>Print</title>
            <link rel="stylesheet" href="./styles/styles.css">
            <link rel="stylesheet" href="./styles/colors.css">
            <link rel="stylesheet" href="./styles/to-do.css">
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
            </style>    
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

// Save as PDF: pending