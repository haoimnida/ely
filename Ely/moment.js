function updateCountUpTimer(startTime) {
    const currentTime = new Date();
    const timeDifference = currentTime - startTime;

    const totalSeconds = Math.floor(timeDifference / 1000);
    const seconds = totalSeconds % 60;
    const totalMinutes = Math.floor(totalSeconds / 60);
    const minutes = totalMinutes % 60;
    const totalHours = Math.floor(totalMinutes / 60);
    const hours = totalHours % 24;
    const days = Math.floor(totalHours / 24);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

// Set the specific start time (Year, Month - 1, Day, Hour, Minute, Second)
const startTime = new Date(2024, 2, 25, 13, 59, 30); 

// Update the timer every second
setInterval(() => updateCountUpTimer(startTime), 1000);
