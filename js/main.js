var hamburger = document.querySelector(".hamburger");
var nav = document.querySelector(".nav-links");
var links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", function() {
    
    //set the initial visibility of nav
    nav.classList.add("opacity");
    
    //Toggle Nav
    nav.classList.toggle("nav-active");
    
    //Animate Links
    links.forEach((link, index) => {
        if(link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 1s ease forwards ${0.5 + index / links.length}s`;
        }
    });
    
    //animate hamburger
    hamburger.classList.toggle('toggle');
});