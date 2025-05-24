// NOTE: night noises will not immediately occur bc it requires interaction with website first bfore audio can be played

// Darkmode settings will persist even on refresh
let darkmode = localStorage.getItem('darkmode');

const themeSwitch = document.getElementById('theme-switch');
const nightNoise = document.getElementById('night-sounds');

const enableDarkmode = () => {
    document.body.classList.add('dark-version');
    nightNoise.play()

    // Store the dark mode state in localStorage
    localStorage.setItem('darkmode', 'active');
}

const disableDarkmode = () => {
    document.body.classList.remove('dark-version');
    nightNoise.pause()
    
    // Remove dark mode state
    localStorage.setItem('darkmode', null);    
}

// Check if dark mode was active from previous session
if(darkmode === "active") {
    enableDarkmode();
}

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode');

    if (darkmode === "active") {
        disableDarkmode()
    }
    else {
        enableDarkmode()
    }
});