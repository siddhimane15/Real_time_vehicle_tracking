// Mock-up bus data (This would be replaced with real-time data in a production environment)
const busData = [
    { 
        busId: "101", 
        route: "Downtown - Uptown", 
        latitude: 40.7128, 
        longitude: -74.0060, 
        source: "Downtown", 
        destination: "Uptown", 
        eta: "12 mins", 
        status: "On time"
    },
    { 
        busId: "102", 
        route: "Uptown - Midtown", 
        latitude: 40.7138, 
        longitude: -74.0020, 
        source: "Uptown", 
        destination: "Midtown", 
        eta: "Delayed", 
        status: "Delayed"
    },
    { 
        busId: "103", 
        route: "Midtown - Downtown", 
        latitude: 40.7158, 
        longitude: -74.0100, 
        source: "Midtown", 
        destination: "Downtown", 
        eta: "5 mins", 
        status: "On time"
    },
];

// Function to update the bus list dynamically
function updateBusList() {
    const busListContainer = document.getElementById('bus-list');
    busListContainer.innerHTML = ''; // Clear existing list
    
    busData.forEach(bus => {
        const busElement = document.createElement('li');
        busElement.innerHTML = `
            <strong>Bus ID: ${bus.busId}</strong><br>
            Route: ${bus.route}<br>
            <div class="details">
                <span><strong>Source:</strong> ${bus.source}</span>
                <span><strong>Destination:</strong> ${bus.destination}</span>
                <span><strong>ETA:</strong> ${bus.eta}</span>
                <span class="status ${bus.status.toLowerCase()}">${bus.status}</span>
            </div>
            Location: Lat: ${bus.latitude}, Long: ${bus.longitude}
        `;
        busListContainer.appendChild(busElement);
    });
}

// Simulate periodic updates (you can replace this with an actual API call)
setInterval(() => {
    updateBusList();
}, 5000); // Update every 5 seconds

// Initial call to populate the bus list
updateBusList();
