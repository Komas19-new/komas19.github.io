// This is not appearing in pages because it is not added to them, Remove this message after fixing it.




// Function to create and show the connection status message
function createConnectionStatus() {
    const connectionContainer = document.querySelector('.connection-container');

    // Create the status box element
    const statusBox = document.createElement('div');
    statusBox.className = 'status-box';
    statusBox.style.display = 'none'; // Initially hide the status box

    // Create the main message element
    const mainMessage = document.createElement('p');
    mainMessage.className = 'main-message';
    mainMessage.textContent = 'You lost internet connection';

    // Create the sub-message element
    const subMessage = document.createElement('p');
    subMessage.className = 'sub-message';
    subMessage.textContent = 'We are trying to reconnect you';

    // Append main and sub messages to the status box
    statusBox.appendChild(mainMessage);
    statusBox.appendChild(subMessage);

    // Append the status box to the connection container
    connectionContainer.appendChild(statusBox);

    return statusBox; // Return the created status box for future reference
}

// Event listener for online and offline events
window.addEventListener('online', () => {
    showConnectionStatus(true);
});

window.addEventListener('offline', () => {
    showConnectionStatus(false);
});

// Function to show or hide the status box based on the online status
function showConnectionStatus(online) {
    const statusBox = createConnectionStatus(); // Create the status box if it doesn't exist

    if (online) {
        // User is online, hide the status message
        statusBox.style.display = 'none';
    } else {
        // User is offline, show the status message
        statusBox.style.display = 'block';
    }
}

// Initial check and display based on the user's online status
showConnectionStatus(navigator.onLine);
