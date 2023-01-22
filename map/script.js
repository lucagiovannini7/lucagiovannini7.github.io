let mapOptions = {
center:[48.78232, 9.17702],
zoom:3
}

let map = new L.map('map' , mapOptions);

let layer = new L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);

let locations = [
{
"id": 1,
"lat": 52.378091,
"long": -1.264856,
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
"lat": 52.391703,
"long": 13.064349,
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
]

let markers = []
for (let i = 0; i < locations.length; i++) {
    markers[i] = new L.Marker([locations[i].lat, locations[i].long], {
        title1: locations[i].title1,
        title2: locations[i].title2
    }).addTo(map);
    if (locations[i].type === "study") {
        markers[i].setIcon(L.AwesomeMarkers.icon({
            icon: 'star',
            markerColor: 'red'
        }));
    }
};


markers.forEach(marker => {
marker.on("mouseover",event =>{
event.target.bindPopup('<div class="card"> <h3>'+marker.options.title1+'</h3> <h3>'+ marker.options.title2+'</h3></div>').openPopup();
})
.on("mouseout", event => {
event.target.closePopup();
})
});