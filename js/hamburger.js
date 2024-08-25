document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('navbar');

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
});