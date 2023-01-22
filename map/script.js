let mapOptions = {
    center:[51.958, 9.141],
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
"src": 'images/1.jpg',
"title": "Erasmus+ stay, 2014-15",
"url":"https://www.warwick.ac.uk/"
},
{
"id": 2,
"lat": 45.070312,
"long": 7.6868565,
"src": 'images/2.jpg',
"title": "Bachelors' degree, 2014-17",
"title": "Masters' degree, 2017-20",
"url":"https://www.unito.it/"
},
{
"id": 3,
"lat": 50.938361,
"long": 6.959974,
"src": 'images/3.jpg',
"title": "Erasmus+ stay, 2017-18",
"url":"https://www.uni-koeln.de/"
},
{
"id": 4,
"lat": 52.391703,
"long": 13.064349,
"src": 'images/4.jpg',
"title": "Doctoral degree, 2021-"
"url":"https://www.uni-potsdam.de/"
}
]
	
for ( let i = 0 ; i< locations.length ; i++){
 new L.Marker([element.lat,element.long]).addTo(map)
}


locations.forEach(element => {
    new L.Marker([element.lat,element.long]).addTo(map)
    .on("mouseover",event =>{
        event.target.bindPopup('content').openPopup();
    })
    .on("mouseout", event => {
        event.target.closePopup();
    })
});

locations.forEach(element => {
    new L.Marker([element.lat,element.long]).addTo(map)
    .on("mouseover",event =>{
        event.target.bindPopup('<div class="card"><img src="'+element.src+'" width="80" height="80" alt="'+element.title+'">   <h3>'+element.title+'</h3></div>').openPopup();
    })
    .on("mouseout", event => {
        event.target.closePopup();
    })
    .on("click" , () => {
        window.open(element.url);
    })
});
