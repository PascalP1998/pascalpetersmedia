function hamburgerMenu() {
    let element = document.getElementById("hamburger-menu");
    if (element.style.visibility === "hidden") {
        element.style.visibility = "visible";
        element.style.zIndex = "10";
        // element.style.position = "relative";
    } else {
        element.style.visibility = "hidden";
        element.style.zIndex = "-10000";
        element.style.position = "fixed";
    }
}