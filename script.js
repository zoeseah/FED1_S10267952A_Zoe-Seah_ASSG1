// Show the popup modal every time the page loads (no check for first-time visit)
window.onload = () => {
    const popupOverlay = document.getElementById('popupOverlay');
    const gotItBtn = document.getElementById('gotItBtn');
    const closeBtn = document.getElementById('closeBtn');

    // Show the popup (no conditions for first-time visit)
    document.getElementById('popupOverlay').style.display = 'flex';

    // Close the popup when the "Got it" button is clicked
    document.getElementById('gotItBtn').addEventListener('click', function() {
        window.location.href = 'menu.html';;
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

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const notification = document.getElementById('notification');

    // Ensure the form is selected correctly
    if (!form) {
        console.error('Form element not found!');
        return;
    }

    // Ensure the notification is selected correctly
    if (!notification) {
        console.error('Notification element not found!');
        return;
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way (page reload)

        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const role = document.getElementById('role').value;

        // Optional: Simple form validation
        if (!name || !email || !role) {
            alert('Please fill in all the fields.');
            return;
        }

        // Log form data (you can also use this to send the data to a server via AJAX if needed)
        console.log('Form Submitted!');
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Role:', role);

        // Show the success message with pop-up effect
        notification.style.display = 'block';

        // Trigger the fade out animation after 3 seconds
        setTimeout(function () {
            notification.style.animation = 'fadeOut 0.5s forwards'; // Fade out animation
        }, 3000); // Trigger fade out after 3 seconds

        // Optionally hide the notification after it fades out
        setTimeout(function () {
            notification.style.display = 'none'; // Hide after fade-out completes
        }, 3500); // Wait a little longer (for the fade-out animation to complete)

        // Reset the form
        form.reset();
    });
});


// Reviews 
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('review-form');
    const successMessage = document.getElementById('success-message');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way (page reload)

        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const rating = document.getElementById('rating').value;
        const review = document.getElementById('review').value;

        // Optional: Simple form validation
        if (!name || !email || !review) {
            alert('Please fill in all the fields.');
            return;
        }

        // Log the form data (you can also store it, send it to a server, etc.)
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Rating:', rating);
        console.log('Review:', review);

        // Show the success message
        successMessage.style.display = 'block';

        // Optionally reset the form
        form.reset();

        // Hide the success message after a few seconds (optional)
        setTimeout(function () {
            successMessage.style.display = 'none';
        }, 5000); // Hides after 5 seconds
    });
});
