const num1 = parseInt(window.prompt("Enter the first number"), 10);
const num2 = parseInt(window.prompt("Enter the second number"), 10);
if (num1 > num2) {
    window.document.write("The larger number is " + num1);
} else if (num2 > num1) {
    window.document.write("The larger number is " + num2);
} else {
    window.document.write(num1 + " and " + num2 + " are equal.");
}
