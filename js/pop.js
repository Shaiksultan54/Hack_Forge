document.addEventListener('DOMContentLoaded', () => {
  const popupOverlay = document.getElementById('popup-overlay');

  // Show the popup after 1 second
  setTimeout(() => {
    popupOverlay.classList.remove('hidden');
  }, 1000);

  // Automatically close the popup after 10 seconds
  setTimeout(() => {
    closePopup();
  }, 30000);
});

// Close the popup
function closePopup() {
  const popupOverlay = document.getElementById('popup-overlay');
  popupOverlay.classList.add('hidden');
}

// Redirect to the hackathon page
function visitPage() {
  window.location.href = 'https://islec.edu.in/HackForge.html'; // Replace with your desired URL
}
