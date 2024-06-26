// Initialize the map
// Initialize the map centered on Dresden
var map = L.map('map').setView([51.0504, 13.7373], 2); // Centered on Dresden, zoom level 6


// Load and display tile layer on the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

// Fetch locations data from database.json
fetch('database.json')
    .then(response => response.json()) // Parse response as JSON
    .then(data => {
        // Loop through locations data and add markers to the map
        data.forEach(location => {
            let lat = location.coordinates[0];
            let lng = location.coordinates[1];
            let titles = location.titles.join('<br>'); // Join titles with line breaks

            // Create marker and bind popup
            var marker = L.marker([lat, lng]).addTo(map);
            marker.bindPopup(`<b>${titles}</b>`);

            // Display popup on click
            marker.on('click', function (e) {
                this.openPopup();
            });
        });
    })
    .catch(error => {
        console.error('Error fetching locations:', error);
    });
