const navLinks = [...document.querySelectorAll("nav a")]
const sections = [...document.querySelectorAll("section")]

// Calculation of the position top of each section
let sectionsPosition;

function positionCalculation() {
    sectionsPosition = sections.map(section => section.offsetTop)
}
positionCalculation()
console.log(sectionsPosition)

// Smooth scroll
navLinks.forEach(link => link.addEventListener("click", addScrollSmooth))

function addScrollSmooth(e) {
    const linkIndex = navLinks.indexOf(e.target)
    window.scrollTo({
        top: sectionsPosition[linkIndex],
        behavior: "smooth"
    })
}

// If window is resizing, recall the function positionCalculation
window.addEventListener("resize", positionCalculation)