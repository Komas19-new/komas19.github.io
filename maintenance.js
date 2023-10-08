// Set the interval (in milliseconds)
const intervalInMilliseconds = 60000; // 60,000 milliseconds = 1 minute

// Schedule the page to refresh at regular intervals
const intervalId = setInterval(() => {
    location.reload();
}, intervalInMilliseconds);

// To stop the interval (e.g., when you want to stop refreshing):
// clearInterval(intervalId);