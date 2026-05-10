const compliments = [
    "You're an amazing mom!",
    "Your love is unconditional!",
    "You inspire us every day!",
    "Your strength is incredible!",
    "You make everything better!",
    "Your kindness knows no bounds!",
    "You're a superhero to us!",
    "Your patience is endless!",
    "You make us feel so loved!",
    "You are the glue that keeps our family together.",
    "You have a way of making even the hardest days feel manageable.",
    "The way you care for the people around you is truly inspiring.",
    "Your strength is something I admire every single day.",
    "The world needs more people with a heart as big as yours.",
    "Thank you for creating such a beautiful life for us.",
    "You have the best advice, even when it’s the advice I didn’t know I needed or wanted.",
    "You're the best mom ever!"
];

const loveButton = document.getElementById('loveButton');
const popup = document.getElementById('popup');
const dismissBtn = document.getElementById('dismiss');
const container = document.querySelector('.container');

let isAnimating = false;

// Create floating hearts in background
function createBackgroundHearts() {
    const body = document.body;
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.classList.add('background-heart');
            heart.textContent = '❤️';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.setProperty('--tx', (Math.random() - 0.5) * 100 + 'px');
            heart.style.animationDelay = Math.random() * 0.5 + 's';
            body.appendChild(heart);
        }, i * 100);
    }
}

// Create hearts on page load
createBackgroundHearts();

// Dismiss popup on load
dismissBtn.addEventListener('click', () => {
    popup.classList.add('hidden');
    container.classList.remove('hidden');
});

// Press for Love button
loveButton.addEventListener('click', () => {
    if (isAnimating) return;
    
    isAnimating = true;
    const complimentDisplay = document.querySelector('.compliment-display');
    
    if (!complimentDisplay) {
        const display = document.createElement('div');
        display.classList.add('compliment-display');
        loveButton.parentElement.insertBefore(display, loveButton);
    }
    
    const display = document.querySelector('.compliment-display');
    const cycles = 8;
    const cycleSpeed = 100;
    
    for (let i = 0; i < cycles; i++) {
        setTimeout(() => {
            const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
            display.textContent = randomCompliment;
        }, i * cycleSpeed);
    }
    
    setTimeout(() => {
        const finalCompliment = compliments[Math.floor(Math.random() * compliments.length)];
        display.textContent = finalCompliment;
        display.classList.add('landed');
        isAnimating = false;
    }, cycles * cycleSpeed);
});