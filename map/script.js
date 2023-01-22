let mapOptions = {
center:[48.78232, 9.17702],
zoom:5
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
"url":"https://www.warwick.ac.uk/"
},
{
"id": 2,
"lat": 45.070312,
"long": 7.6868565,
"title1": "Università degli Studi di Torino",
"title2": "B.A. 2014-17 / M.A. 2017-20",
"url":"https://www.unito.it/"
},
{
"id": 3,
"lat": 50.938361,
"long": 6.959974,
"title1": "Universität zu Köln",
"title2": "Erasmus+ stay, 2017-18",
"url":"https://www.uni-koeln.de/"
},
{
"id": 4,
"lat": 52.391703,
"long": 13.064349,
"title1": "Universität Potsdam",
"title2": "Joint PhD, 2021-",
"url":"https://www.uni-potsdam.de/"
},
{
"id": 5,
"lat": 45.406435,
"long": 11.876761,
"title1": "Università degli Studi di Padova",
"title2": "Joint PhD, 2023-",
"url":"https://www.unipd.it/"
}
]

let markers = []
for ( let i = 0 ; i< locations.length ; i++){
markers[i] = new L.Marker([locations[i].lat,locations[i].long], {title1: locations[i].title1,title2: locations[i].title2}).addTo(map);
 if (locations[i].id === 4) {
  markers[i].setIcon(L.icon({
    iconUrl: 'https://png.pngtree.com/png-clipart/20210205/ourlarge/pngtree-location-design-png-image_2884573.jpg',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  }));
 }
}

markers.forEach(marker => {
marker.on("mouseover",event =>{
event.target.bindPopup('<div class="card"> <h3>'+marker.options.title1+'</h3> <h3>'+ marker.options.title2+'</h3></div>').openPopup();
})
.on("mouseout", event => {
event.target.closePopup();
})
});