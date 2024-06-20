document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('videoModal');
    const closeModal = document.querySelector('.close');
    const video = document.getElementById('modalVideo');

    // Display the modal and play the video when the page loads
    modal.style.display = 'block';
    video.play();

    closeModal.addEventListener('click', function() {
        modal.style.display = 'none'; // Hide the modal
        video.pause();
    });

    // Close modal if user clicks outside the modal content
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none'; // Hide the modal
            video.pause();
        }
    });
});
