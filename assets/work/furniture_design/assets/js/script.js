window.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('navArea');
    const btn = document.querySelector('.btn-trigger');
    const openClass = 'open';

    btn.addEventListener('click', function() {
        this.classList.toggle(openClass);
        nav.classList.toggle(openClass);
    });
});