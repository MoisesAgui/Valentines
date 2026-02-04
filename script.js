const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const celebration = document.getElementById('celebration');

let yesSize = 18; // Starting font size for Yes button

noBtn.addEventListener('mouseover', () => {
    // Move No button randomly within bounds
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;

    // Make Yes button bigger
    yesSize += 5;
    yesBtn.style.fontSize = `${yesSize}px`;
});

yesBtn.addEventListener('click', () => {
    celebration.style.display = 'block';
    noBtn.style.display = 'none'; // Hide No button after Yes is clicked
    // Optional: Add fireworks effect with canvas or a library like confetti.js
});