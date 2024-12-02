// Initialize navigation boxes based on section state
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.rule-section').forEach((section) => {
        const navBox = document.querySelector(`.rule-box[href="#${section.id}"]`);

        if (section.classList.contains('good')) {
            navBox.setAttribute('data-section', 'good');
        } else {
            navBox.setAttribute('data-section', 'bad');
        }
    });
});

// Toggle button functionality
document.querySelectorAll('.toggle-button').forEach((button) => {
    button.addEventListener('click', () => {
        const section = button.closest('.rule-section');
        const navBox = document.querySelector(`.rule-box[href="#${section.id}"]`);

        // Toggle the section between good and bad
        if (section.classList.toggle('good')) {
            navBox.setAttribute('data-section', 'good');
        } else {
            navBox.setAttribute('data-section', 'bad');
        }
    });
});

// Function to show or hide the button based on scroll position
window.addEventListener('scroll', function() {
    var button = document.getElementById('scrollToTopBtn');
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    var threshold = 300;

    if (scrollPosition > threshold) {
        button.classList.add('visible');
    } else {
        button.classList.remove('visible');
    }
});

// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


