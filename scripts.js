// Show the popup modal when the page loads (only the first time)
window.onload = () => {
    const popupOverlay = document.getElementById('popupOverlay');
    const gotItBtn = document.getElementById('gotItBtn');
    const closeBtn = document.getElementById('closeBtn');

    if (!localStorage.getItem('hasVisited')) {
        // If not, show the popup
        document.getElementById('popupOverlay').style.display = 'flex';

        // Set a flag in localStorage to indicate the user has visited
        localStorage.setItem('hasVisited', 'true');
    }

    // Close the popup when the "Got it" button is clicked
    document.getElementById('gotItBtn').addEventListener('click', function() {
        document.getElementById('popupOverlay').style.display = 'none';
    });

    // Close the popup when the close button is clicked
    document.getElementById('closeBtn').addEventListener('click', function() {
        document.getElementById('popupOverlay').style.display = 'none';
    });

}

const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const prevButton = document.querySelector('#prevBtn');
const nextButton = document.querySelector('#nextBtn');

// Set initial slide position
let currentIndex = 0;

// Function to move to a specific slide
const moveToSlide = (index) => {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${slideWidth * index}px)`;
};

// Move to the next slide
nextButton.addEventListener('click', () => {
    if (currentIndex === slides.length - 1) {
        currentIndex = 0;  // Loop back to the first slide
    } else {
        currentIndex++;
    }
    moveToSlide(currentIndex);
});

// Move to the previous slide
prevButton.addEventListener('click', () => {
    if (currentIndex === 0) {
        currentIndex = slides.length - 1;  // Loop to the last slide
    } else {
        currentIndex--;
    }
    moveToSlide(currentIndex);
});

// Auto-scroll functionality (slides every 3 seconds)
const autoScroll = () => {
    setInterval(() => {
        if (currentIndex === slides.length - 1) {
            currentIndex = 0; // Loop back to the first slide
        } else {
            currentIndex++;
        }
        moveToSlide(currentIndex);
    }, 3000); // Change slide every 3 seconds
};

// Start auto-scroll on page load
autoScroll();


document.getElementById('newsletterForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally
    
    // Simulate a successful submission (you can replace this with an actual submission code if needed)
    
    // Display the notification
    showNotification('Thank you for subscribing!');
    
    // Optionally, reset the form after submission
    event.target.reset();
});

function showNotification(message) {
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.textContent = message;

    // Append the notification to the body
    document.body.appendChild(notification);

    // Show the notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 10); // Adding slight delay to ensure the element is added to the DOM

    // Hide the notification after 4 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        // Remove the notification from the DOM after animation
        notification.remove();
    }, 4000); // Notification disappears after 4 seconds
}
