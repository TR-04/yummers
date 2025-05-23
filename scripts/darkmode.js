// NOTE: night noises will not immediately occur bc it requires interaction with website first bfore audio can be played

// Darkmode settings will persist even on refresh
let darkmode = localStorage.getItem('darkmode');

// Get the theme switch button element by ID
const themeSwitch = document.getElementById('theme-switch');
const nightNoise = document.getElementById('night-sounds');


// Function to enable dark mode
const enableDarkmode = () => {
    // Add 'dark-version' class to the body (changed from 'darkmode')
    document.body.classList.add('dark-version');
    nightNoise.play()
    // Store the dark mode state in localStorage
    localStorage.setItem('darkmode', 'active');
}

// Function to disable dark mode
const disableDarkmode = () => {
    // Remove 'dark-version' class from the body (changed from 'darkmode')
    document.body.classList.remove('dark-version');
    nightNoise.pause()
    
    // Remove or set to null the dark mode state in localStorage
    localStorage.setItem('darkmode', null);    
}

// Check if dark mode was active from previous session
if(darkmode === "active") {
    enableDarkmode();
}


// Add click event listener to the theme switch button
themeSwitch.addEventListener("click", () => {
    // Get the current dark mode status again (in case it was changed elsewhere)
    darkmode = localStorage.getItem('darkmode');

    // Toggle dark mode based on current state
    if (darkmode === "active") {
        disableDarkmode()
    }
    else {
        enableDarkmode()
    }
    
});
