const coinFlip = Math.round(Math.random());
const choice = window.prompt("Would you like heads or tails?");

// Heads
if (coinFlip) {
    if (choice === "heads") {
        window.document.write("The flip was heads and you chose heads...you win!");
    } else {
        window.document.write("The flip was heads and you chose tails...you lose!");
    }
}
// Tails
else {
    if (choice === "heads") {
        window.document.write("The flip was tails and you chose heads...you lose!");
    } else {
        window.document.write("The flip was tails and you chose tails...you win!");
    }
}
