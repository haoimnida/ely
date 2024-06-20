const audioPlayer = document.getElementById('audioPlayer');

// Function to play the audio
function playAudio() {
    audioPlayer.play();
}

// Autoplay the audio when the page loads (on interaction)
document.addEventListener('DOMContentLoaded', function() {
    playAudio();
});

// Handle browser-specific autoplay policies
document.addEventListener('click', function() {
    playAudio();
});
