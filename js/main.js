// Selecting Elements for effects
// Buttons for hide and show effect
const hideButtonOne = document.querySelector('input[id="valued"]');
const showButtonOne = document.querySelector('input[id="not-valued"]');
const hideButtonTwo = document.querySelector('input[id="resources"]');
const showButtonTwo = document.querySelector('input[id="resources-no"]');
const hideButtonThree = document.querySelector('input[id="stress"]');
const showButtonThree = document.querySelector('input[id="stress-no"]');
const hideButtonFour = document.querySelector('input[id="sufficient"]');
const showButtonFour = document.querySelector('input[id="not-sufficient"]');

// sections to be hidden and showed
const sectionOne = document.querySelector(".please-explain-section");
const sectionTwo = document.querySelector(".please-explain-section2");
const sectionThree = document.querySelector(".please-explain-section3");
const sectionFour = document.querySelector(".please-explain-section4");

// first button hide and show effect for first section
hideButtonOne.addEventListener("click", perform => {
    sectionOne.style.display = "none";
});

showButtonOne.addEventListener("click", perform => {
    sectionOne.style.display = "block";
});


// second button hide and show effect for second section
hideButtonTwo.addEventListener("click", perform => {
    sectionTwo.style.display = "none";
});

showButtonTwo.addEventListener("click", perform => {
    sectionTwo.style.display = "block";
});


// third button hide and show effect for third section
hideButtonThree.addEventListener("click", perform => {
    sectionThree.style.display = "block";
});

showButtonThree.addEventListener("click", perform => {
    sectionThree.style.display = "none";
});


// fourth button hide and show effect for fourth section
hideButtonFour.addEventListener("click", perform => {
    sectionFour.style.display = "none";
});

showButtonFour.addEventListener("click", perform => {
    sectionFour.style.display = "block";
});
