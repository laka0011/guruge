// date ----------------------------------------------------------------------
function formatDate(date) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

function displayDate() {
    const today = new Date();
    const formattedDate = formatDate(today);
    document.getElementById('date-display').innerText = formattedDate;
}

window.onload = displayDate;

//-------------------------------------------------------------------------

// Name and Email -------------------------------------------------
function getQueryParams() {
    const params = {};
    const queryString = window.location.search.substring(1);
    const regex = /([^&=]+)=([^&]*)/g;
    let m;

    while (m = regex.exec(queryString)) {
        params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
    }
    return params;
}

const params = getQueryParams();
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('date-display').textContent = new Date().toLocaleDateString();
    const welcomeMessage = document.createElement('h3');
    welcomeMessage.textContent = `Welcome ${params.name} (${params.email})`;
    document.querySelector('.date').appendChild(welcomeMessage);
});

//---------- Function to display the current time ----------------
function displayClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    const currentTime = `${hours}:${minutes}:${seconds}`;
    clockElement.textContent = currentTime;
}

setInterval(displayClock, 1000);

function displayDate() {
    const dateElement = document.getElementById('date-display');
    const now = new Date();
    const dateString = now.toDateString();
    dateElement.textContent = dateString;
}

displayDate();