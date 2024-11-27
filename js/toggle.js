// Work in progress - Gabe
//

document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.toggle-button');
    const mainContent = document.querySelector('.main-content');

    toggleButton.addEventListener('click', function () {
        // Toggle the green-theme class to switch between red and green background
        mainContent.classList.toggle('green-theme');
    });
});
