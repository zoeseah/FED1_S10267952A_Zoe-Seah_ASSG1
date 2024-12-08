// Show the popup modal every time the page loads (no check for first-time visit)
window.onload = () => {
    const popupOverlay = document.getElementById('popupOverlay');
    const gotItBtn = document.getElementById('gotItBtn');
    const closeBtn = document.getElementById('closeBtn');

    // Show the popup (no conditions for first-time visit)
    document.getElementById('popupOverlay').style.display = 'flex';

    // Close the popup when the "Got it" button is clicked
    document.getElementById('gotItBtn').addEventListener('click', function() {
        document.getElementById('popupOverlay').style.display = 'none';
    });

    // Close the popup when the close button is clicked
    document.getElementById('closeBtn').addEventListener('click', function() {
        document.getElementById('popupOverlay').style.display = 'none';
    });
}


// Carousel functionality
document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const prevButton = document.querySelector('#prevBtn');
    const nextButton = document.querySelector('#nextBtn');

    let currentIndex = 0; // Initial slide index

    const moveToSlide = (index) => {
        const slideWidth = slides[0].getBoundingClientRect().width;
        track.style.transform = `translateX(-${slideWidth * index}px)`; // Move carousel slides
    };

    // Next button click event
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
        moveToSlide(currentIndex);
    });

    // Previous button click event
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
        moveToSlide(currentIndex);
    });

    // Auto-scroll functionality
    const autoScroll = () => {
        setInterval(() => {
            currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
            moveToSlide(currentIndex);
        }, 3000); // Auto-scroll every 3 seconds
    };

    autoScroll(); // Start auto-scrolling when the page loads
});

// Newsletter form submission
document.getElementById('newsletterForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const emailInput = document.getElementById('emailInput').value; // Get email input value

    if (emailInput) {
        // Show the notification
        const notification = document.getElementById('notification');
        notification.classList.add('show'); // Show notification by adding 'show' class

        // Optionally, hide the notification after 5 seconds
        setTimeout(() => {
            notification.classList.remove('show'); // Hide the notification by removing 'show' class
        }, 5000); // Hide after 5 seconds
    } else {
        alert("Please enter a valid email.");
    }
});
