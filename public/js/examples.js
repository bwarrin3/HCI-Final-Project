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



// Functions for slideshows
document.addEventListener('DOMContentLoaded', function () {
    // Initialize all slideshows
    initializeSlideshows();
});

function initializeSlideshows() {
    const slideshows = document.querySelectorAll('.slideshow');

    slideshows.forEach(slideshow => {
        let slides = slideshow.querySelectorAll('.slide');
        if (slides.length > 0) {
            slides[0].classList.add('active'); // Show first slide initially
        }
    });
}

function changeSlide(button, n) {
    let slideshow = button.parentElement;
    let slides = slideshow.querySelectorAll('.slide');

    // Find the current active slide
    let currentIndex = Array.from(slides).findIndex(slide => slide.classList.contains('active'));
    if (currentIndex === -1) currentIndex = 0; // Default to first slide

    // Calculate the new slide index
    let newIndex = (currentIndex + n + slides.length) % slides.length;

    // Update slide visibility
    slides[currentIndex].classList.remove('active');
    slides[newIndex].classList.add('active');
}



