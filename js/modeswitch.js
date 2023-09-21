function goDark() {
    try { document.getElementById("navbar").classList.add("dark-mode"); } catch {};
    try { document.body.classList.add("dark-mode"); } catch {};
    try { document.body.classList.add("dark-mode"); } catch {};
    try {
        const cards = document.getElementsByClassName("card");
        if (cards) {
            for (card in cards) {
                cards[card].classList.add("dark-mode");
                //console.log(cards[card]);
            }
        }
    } catch {};
    try {
        const projects = document.getElementsByClassName("project-noweb");
        if (projects) {
            for (project in projects) {
                projects[project].classList.add("dark-mode");
                //console.log(projects[project]);
            }
        }
    } catch {};
    try {
        const modebtn = document.getElementById("mode-btn");
        modebtn.style.backgroundImage = "url('./img/icons/sun.svg')";
    } catch {};
    
}

function goBright() {
    try { document.getElementById("navbar").classList.remove("dark-mode"); } catch {};
    try { document.body.classList.remove("dark-mode"); } catch {};
    try { document.body.classList.remove("dark-mode"); } catch {};
    try {
        const cards = document.getElementsByClassName("card");
        if (cards) {
            for (card in cards) {
                cards[card].classList.remove("dark-mode");
                //console.log(cards[card]);
            }
        }
    } catch {};
    try {
        const projects = document.getElementsByClassName("project-noweb");
        if (projects) {
            for (project in projects) {
                projects[project].classList.remove("dark-mode");
                //console.log(projects[project]);
            }
        }
    } catch {};
    try {
        const modebtn = document.getElementById("mode-btn");
        modebtn.style.backgroundImage = "url(../img/icons/moon.svg)"
    } catch {};
    
}

function createStorage() {
    if (!(localStorage["mode"])) {
        localStorage.setItem("mode", "bright");
    } else if (localStorage["mode"] == "dark") {
        goDark();
    }
}

function toggleMode() {
    if (localStorage["mode"] == "bright") {
        goDark();
        localStorage.setItem("mode", "dark");
        location.reload();
    } else if (localStorage["mode"] == "dark") {
        goBright();
        localStorage.setItem("mode", "bright");
        location.reload();
    }
}

document.addEventListener("DOMContentLoaded", createStorage);
document.getElementById("mode-btn").addEventListener("click", toggleMode);
