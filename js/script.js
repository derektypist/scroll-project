/*
    Element.getBoundingClientRect() method returns the size of the element
    and its position relative to the viewport.

    pageYOffset is a read-only window property that returns the number of
    pixels the document has been scrolled vertically.

    slice extracts a section of the string without modifying original string.

    offsetTop - A Number, representing the top position of the element in pixels.

*/

// Set Date
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// Close Links
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener("click", function() {
    const linksHeight = links.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    if (containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`;
    } else {
        linksContainer.style.height = 0;
    }
});

// Fixed Navbar
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function() {
    const scrollHeight = window.pageYOffset;
});

