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
        "lat": 45.070312,
        "long": 7.6868565,
        "title": "Bacherlor's degree, 2014-2017"
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
