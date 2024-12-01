document.addEventListener('DOMContentLoaded', function () {
    const toggleButtons = document.querySelectorAll('.toggle-button');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function () {
            const targetSectionId = button.getAttribute('data-target');
            const section = document.getElementById(targetSectionId);
            const isGood = section.classList.toggle('good');

            // Toggle display of good and bad examples
            section.querySelectorAll('.good-example').forEach(el => {
                el.style.display = isGood ? 'block' : 'none';
            });

            section.querySelectorAll('.bad-example').forEach(el => {
                el.style.display = isGood ? 'none' : 'block';
            });

            // Change button text to reflect the toggle state
            button.textContent = isGood ? 'Show Bad' : 'Show Good';
        });

        // Initialize each section with bad examples visible and good examples hidden
        const targetSectionId = button.getAttribute('data-target');
        const section = document.getElementById(targetSectionId);

        section.querySelectorAll('.good-example').forEach(el => el.style.display = 'none');
        section.querySelectorAll('.bad-example').forEach(el => el.style.display = 'block');
    });
});
