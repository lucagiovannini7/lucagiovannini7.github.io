let mapOptions = {
center:[48.78232, 9.17702],
zoom:4
}

let map = new L.map('map' , mapOptions);

let layer = new L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);

let locations = [
{
"id": 1,
"lat": 52.381791,
"long": -1.561735,
"title1": "University of Warwick",
"title2": "Erasmus+ stay, 2014-15",
"type":"study"
},
{
"id": 2,
"lat": 45.070312,
"long": 7.6868565,
"title1": "Università degli Studi di Torino",
"title2": "B.A. 2014-17 / M.A. 2017-20",
"type":"study"
},
{
"id": 3,
"lat": 50.938361,
"long": 6.959974,
"title1": "Universität zu Köln",
"title2": "Erasmus+ stay, 2017-18",
"type":"study"
},
{
"id": 4,
"lat": 52.40130,
"long": 13.01132,
"title1": "Universität Potsdam",
"title2": "Joint PhD, 2021-",
"type":"study"
},
{
"id": 5,
"lat": 45.406435,
"long": 11.876761,
"title1": "Università degli Studi di Padova",
"title2": "Joint PhD, 2023-",
"type":"study"
}
{
"id": 6,
"lat": 52.40130,
"long": 13.01132,
"title1": "DHd 2022",
"title2": "Universität Potsdam (07-11.03.2023)",
"type":"conference"
}
{
"id": 7,
"lat": 49.8728256, 
"long": 8.6511949,
"title1": "1st Conference for Computational Literary Studies",
"title2": "Technische Universität Darmstadt",
"type":"conference"
}
{
"id": 8,
"lat": 49.6116667, 
"long": 6.1316667,
"title1": "Dhd 2023",
"title2": "Belval (13-14.03.2023)",
"type":"conference"
}
{
"id": 9,
"lat": 49.755868, 
"long": 6.638778,
"title1": "Dhd 2023",
"title2": "Trier (15-17.03.2023)",
"type":"conference"
}
{
"id": 10,
"lat": 31.798418, 
"long": 35.239469,
"title1": "1st HUBJ-FUB DH Winter School",
"title2": "Jerusalem (27.02-01.03.2023)",
"type":"conference"
}
]

let markers = []
locations.forEach(location => {
    let marker = new L.Marker([location.lat, location.long], {
        title1: location.title1,
        title2: location.title2
    }).addTo(map);
    markers.push(marker);
	
	if (location.type === 'study') {
      marker.setIcon(new L.Icon({
        iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      }));
    }
		
    marker.on("mouseover", event => {
        event.target.bindPopup('<div class="card"> <h3>' + marker.options.title1 + '</h3> <h3>' + marker.options.title2 + '</h3></div>').openPopup();
    })
    .on("mouseout", event => {
        event.target.closePopup();
    });
});
