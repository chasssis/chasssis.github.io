// Get the #enter div element
const enterDiv = document.getElementById("enter");

// Add a click event listener to the #enter div
enterDiv.addEventListener("click", function() {
    // Set the opacity of the #enter div to 0
    enterDiv.style.opacity = "0";

    // Add a delay to hide the #enter div completely after the opacity transition is complete
    setTimeout(() => {
        enterDiv.style.display = "none";
    }, 900); // Duration of 0.9s (900ms) matches the CSS transition duration
});
