const button = document.getElementById('web-name');
const sound = document.getElementById('name-clickSound');

button.addEventListener('click', function() {
    // Reset sound to beginning (allows for rapid clicking)
    sound.currentTime = 0;
    // Play the sound
    sound.play();

    confetti({
        particleCount: 100,
        spread: 700,
        origin: { y: 0.6 }
    });                       
});