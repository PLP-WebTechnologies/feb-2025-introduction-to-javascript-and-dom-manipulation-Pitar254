

const intro = document.getElementById("intro");
intro.textContent = "JAVASCRIPT ASSIGNMENT"; // Change the intro from SIMON PETER to JAVASCRIPT ASSIGNMENT using textContent

const info = document.getElementById("info");
info.style.color = "red";
info.style.fontSize = "20px"; // Modifies CSS styles via JavaScript.


// Adds or removes an element when a button is clicked.
const btn = document.getElementById("btn");
const message = document.getElementById("message");

btn.addEventListener("click", () => {
    message.textContent = "You Clicked the Button!";
});
