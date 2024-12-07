// Popup Modal (uncomment if needed)
window.onload = function () {
    const modal = document.getElementById("popupModal");
    modal.style.display = "flex";
};

function closeModal() {
    const modal = document.getElementById("popupModal");
    modal.style.display = "none";
}

function redirectMenu() {
    window.location.href = "pages/menu.html"; // Redirect to Menu
}



// Select the carousel container and slides
const track = document.querySelector('.carousel'); // Select the carousel container
const slides = Array.from(track.children); // Get all the slides
// Select the control buttons
const prevButton = document.querySelector('.prev'); // Previous button
const nextButton = document.querySelector('.next'); // Next button

let currentSlide = 0;

// Function to update the carousel position
const updateCarousel = () => {
  // Slide the track to the appropriate position based on the currentSlide
  track.style.transform = `translateX(-${currentSlide * 100}%)`;
};

// Handle clicking the "Previous" button
prevButton.addEventListener('click', () => {
  currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
  updateCarousel();
});

// Handle clicking the "Next" button
nextButton.addEventListener('click', () => {
  currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
  updateCarousel();
});

// Optional: Auto-slide every 5 seconds
setInterval(() => {
  currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
  updateCarousel();
}, 5000);

  

function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
  
    if (name === "" || email === "" || message === "") {
      alert("All fields must be filled out.");
      return false;
    }
    
    // If everything is okay
    alert("Thank you for contacting us!");
    return true;
  }
  