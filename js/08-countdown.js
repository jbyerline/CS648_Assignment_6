const num = parseInt(window.prompt("Enter a number to count down from"), 10);
let i;

for (i = num; i >= 1; i--) {
    window.document.write(i + "<br>");
}
