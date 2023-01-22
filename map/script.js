let mapOptions = {
    center:[45.070312, 7.6868565],
    zoom:10
}

let map = new L.map('map' , mapOptions);

let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);

let locations = [
{
"id": 1,
"lat": 52.378091,
"long": -1.264856,
"title": "Erasmus+ stay, 2014-15",
"url":"https://www.warwick.ac.uk/"
},
{
"id": 2,
"lat": 45.070312,
"long": 7.6868565,
"title1": "Bachelors' degree, 2014-17",
"title2": "Masters' degree, 2017-20",
"url":"https://www.unito.it/"
},
{
"id": 3,
"lat": 50.938361,
"long": 6.959974,
"title": "Erasmus+ stay, 2017-18",
"url":"https://www.uni-koeln.de/"
},
{
"id": 4,
"lat": 52.391703,
"long": 13.064349,
"title": "Doctoral degree, 2021-",
"url":"https://www.uni-potsdam.de/"
}
]

let markers = []
for ( let i = 0 ; i< locations.length ; i++){
 markers[i] = new L.Marker([locations[i].lat,locations[i].long]).addTo(map);
}

markers.forEach(marker => {
    marker.on("mouseover",event =>{
        event.target.bindPopup('<div class="card"> <h3>'+element.title+'</h3></div>').openPopup();
    })
    .on("mouseout", event => {
        event.target.closePopup();
    })
    .on("click" , () => {
        window.open(element.url);
    })
});
