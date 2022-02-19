const iconMenu = document.getElementById('icon-menu');

function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

iconMenu.addEventListener('click', toggleMenu);