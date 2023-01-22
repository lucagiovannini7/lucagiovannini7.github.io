let mapOptions = {
    center:[45.070312, 7.6868565],
    zoom:10
}

let map = new L.map('map' , mapOptions);

let layer = new L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);

let locations = [
{
"id": 1,
"lat": 52.378091,
"long": -1.264856,
"title": "Erasmus+ stay, 2014-15",
"url":"https://www.warwick.ac.uk/"
}
]

let markers = []
for ( let i = 0 ; i< locations.length ; i++){
    markers[i] = new L.Marker([locations[i].lat,locations[i].long], {title: locations[i].title, url: locations[i].url}).addTo(map);
}

markers.forEach(marker => {
    marker.on("mouseover",event =>{
        event.target.bindPopup('<div class="card"> <h3>'+marker.options.title+'</h3></div>').openPopup();
    })
    .on("mouseout", event => {
        event.target.closePopup();
    })
    .on("click" , () => {
        window.open(marker.options.url);
    })
});
