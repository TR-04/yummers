const container1 = document.getElementById('c1');
const container3 = document.getElementById('c3');
const container6 = document.getElementById('c6');
const container7 = document.getElementById('c7');

let flipped1 = false;
let flipped3 = false;
let flipped6 = false;
let flipped7 = false;

const about = document.getElementById('ABOUT');
let AboutisClickable = true;

const experience = document.getElementById('EXPERIENCE');
let ExperienceisClickable = true;


about.addEventListener( "click", () => {
    if (AboutisClickable == true) {
        AboutisClickable = false;
        document.body.classList.add('container1-clicked');
        setTimeout(() => {
            document.body.classList.remove('container1-clicked');

            AboutisClickable = true;
        }, 900);
    }
});

experience.addEventListener( "click", () => {
    if (ExperienceisClickable == true) {
        ExperienceisClickable = false;
        document.body.classList.add('container3-clicked');
        setTimeout(() => {
            document.body.classList.remove('container3-clicked');

            ExperienceisClickable = true;
        }, 900);   
    }
});

// ABOUT //
const new_to_original1 = () => {
    c1.textContent = "???"
    flipped1 = false;
};

const original_to_new1 = () => {
    c1.textContent = "Hello!\n\nI'm Louis, a 2nd year who enjoys\nbeing active sometimes (T-T)\n\n Web devving is my new favourite hobby :)"
    flipped1 = true;
};

container1.addEventListener( "click", () => {
    
    if (flipped1 === false) {
        original_to_new1()
    }
    else {
        new_to_original1()
    }
});

// EXPERIENCE //
const new_to_original3 = () => {
    c3.textContent = "???"
    flipped3 = false;
};

const original_to_new3 = () => {
    c3.textContent = "Literally none!\n\nI haven't done any web devving courses yet,\nbut I find frontend incredibly fun\n\nYoutube has been my goat so far"
    flipped3 = true;
};

container3.addEventListener( "click", () => {

    if (flipped3 === false) {
        original_to_new3()
    }
    else {
        new_to_original3()
    }
});

// ? //
const new_to_original6 = () => {
    c6.textContent = "???"
    flipped1 = false;
};

const original_to_new6 = () => {
    c6.textContent = "NOTHING HERE :3"
    flipped1 = true;
};

container6.addEventListener( "click", () => {
    
    if (flipped1 === false) {
        original_to_new6()
    }
    else {
        new_to_original6()
    }
});

// ? //
const new_to_original7 = () => {
    c7.textContent = "???"
    flipped7 = false;
};

const original_to_new7 = () => {
    c7.textContent = "NOTHING HERE :3"
    flipped7 = true;
};

container7.addEventListener( "click", () => {
    
    if (flipped7 === false) {
        original_to_new7()
    }
    else {
        new_to_original7()
    }
});

