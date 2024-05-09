const stripesContainer = document.getElementById('stripes-container');
const numberOfStripes = 29;

for (let i = 0; i < numberOfStripes; i++) {
    const stripe = document.createElement('div');
    stripe.className = 'stripe';
    stripesContainer.appendChild(stripe);
}