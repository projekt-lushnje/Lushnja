  // Script për të ndryshuar përmbajtjen
const menuButtons = document.querySelectorAll('.menu-btn');
const contentSections = document.querySelectorAll('.parku-info');

menuButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Hiq klasën 'aktiv' nga të gjithë butonat dhe pjesët
        menuButtons.forEach(btn => btn.classList.remove('aktiv'));
        contentSections.forEach(section => section.classList.remove('aktiv'));

        // Shto klasën 'aktiv' për butonin dhe pjesën e zgjedhur
        button.classList.add('aktiv');
        const target = button.getAttribute('data-content');
        document.getElementById(target).classList.add('aktiv');
    });
});