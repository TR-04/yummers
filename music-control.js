// Get reference to the music switch button
const musicSwitch = document.getElementById('music-switch');
const backgroundMusic = document.getElementById('background-music');

backgroundMusic.volume = 0.75;

let musicOn = false;

const enableMusic = () => {
    // Add 'dark-version' class to the body (changed from 'darkmode')
    document.body.classList.add('music-on');
    backgroundMusic.play()

    musicOn = true;
}

// Function to disable dark mode
const disableMusic = () => {
    // Remove 'dark-version' class from the body (changed from 'darkmode')
    document.body.classList.remove('music-on');
    backgroundMusic.pause()

    musicOn = false;
}

// Add click event listener to toggle the class
musicSwitch.addEventListener("click", () => {
    // Toggle dark mode based on current state
    if (musicOn == false) {
        enableMusic()
    }
    else {
        disableMusic()
    }
});
