const asideTogglers = document.querySelectorAll('.menu-toggler')
const asideMenu = document.querySelector('.mobile-nav')

asideTogglers.forEach(btn => btn.addEventListener('click', toggleNav))

function toggleNav() {
    asideMenu.classList.toggle('active')
}