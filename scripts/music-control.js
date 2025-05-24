const musicSwitch = document.getElementById('music-switch');
const backgroundMusic = document.getElementById('background-music');

backgroundMusic.volume = 0.75;

let musicOn = false;

const enableMusic = () => {
    document.body.classList.add('music-on');
    backgroundMusic.play()

    musicOn = true;
}

const disableMusic = () => {
    document.body.classList.remove('music-on');
    backgroundMusic.pause()

    musicOn = false;
}

musicSwitch.addEventListener("click", () => {
    if (musicOn == false) {
        enableMusic()
    }
    else {
        disableMusic()
    }
});
