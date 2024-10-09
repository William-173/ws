// Function to get the user's location and IP
async function getLocationAndIP() {
    try {
        // Fetch location data
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        const { city, region, country, ip } = data;

        // Display location and IP
        document.getElementById("location").innerText = `Location: ${city}, ${region}, ${country}`;
        document.getElementById("ip").innerText = `IP Address: ${ip}`;
    } catch (error) {
        document.getElementById("location").innerText = "Error retrieving location.";
        document.getElementById("ip").innerText = "Error retrieving IP.";
    }
}

// Execute the function on load
window.onload = function() {
    getLocationAndIP();
};
