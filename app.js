document.addEventListener('DOMContentLoaded', () => {
    const headerLinks = document.querySelectorAll('.header-nav a');
    const asideButtons = document.querySelectorAll('.aside-btn');

    headerLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = '#ffcc00';
        });
        link.addEventListener('mouseout', () => {
            link.style.color = 'white';
        });
    });

    asideButtons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.backgroundColor = '#ffcc00';
        });
        button.addEventListener('mouseout', () => {
            button.style.backgroundColor = '#4a90e2';
        });
    });
});