function toggleMenu() {
    const menu= document.querySelector(".menu-links");
    const icon= document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

var typed = new Typed(".section_text_p2", {
    strings: ["System Engineer", "Programmer", "Coding Nerd"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
    });