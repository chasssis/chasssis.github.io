const stripesContainer = document.getElementById('stripes-container');
const numberOfStripes = 29;
const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", function(e) {
    const posX = e.clientX;
    const posY = e.clientY;
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;
    //cursorOutline.style.left = `${posX}px`;
    //cursorOutline.style.top = `${posY}px`;
    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, {duration: 500, fill: "forwards" });
});

for (let i = 0; i < numberOfStripes; i++) {
    const stripe = document.createElement('div');
    stripe.className = 'stripe';
    stripesContainer.appendChild(stripe);
}