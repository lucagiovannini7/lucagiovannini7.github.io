let mapOptions = {
center:[43.856259, 18.413076],
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
"lat": 50.92807216246431,
"long": 6.927971877108897,
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
},
{
"id": 6,
"lat": 52.41762, 
"long": 13.0636,
"title1": "DHd 2022",
"title2": "Universität Potsdam, 07-11.03.2023",
"type":"conference"
},
{
"id": 7,
"lat": 49.8728256, 
"long": 8.6511949,
"title1": "CCLS 2023",
"title2": "Technische Universität Darmstadt, 01.02-02.06.2023",
"type":"conference"
},
{
"id": 8,
"lat": 49.6116667, 
"long": 6.1316667,
"title1": "DHd 2023",
"title2": "Universität Luxemburg, 13-14.03.2023",
"type":"conference"
},
{
"id": 9,
"lat": 49.755868, 
"long": 6.638778,
"title1": "DHd 2023",
"title2": "Universität Trier, 15-17.03.2023",
"type":"conference"
},
{
"id": 10,
"lat": 31.798418, 
"long": 35.239469,
"title1": "1st HUBJ-FUB DH Winter School",
"title2": "Hebrew University of Jerusalem, 27.02-01.03.2023",
"type":"conference"
},
{
"id": 11,
"lat": 50.85792,  
"long": 7.08365,
"title1": "Workshop on Computational Drama Analysis",
"title2": "Universität zu Köln, 15-16.09.2022",
"type":"conference"
},
{
"id": 12,
"lat": 48.573405,
"long": 13.460086,
"title1": "DHd 2024",
"title2": "Universität Passau, 26.01-01.03.2024",
"type": "conference"
},
{
"id": 13,
"lat": 45.406434,
"long": 11.876761,
"title1": "Digital Philology Seminar",
"title2": "Università di Padova, 10-14.07.2023",
"type": "conference"
},
{
"id": 14,
"lat": 59.436960,
"long": 24.753574,
"title1": "CUDAN 2023",
"title2": "University of Tallinn, 13-16.12.2023",
"type": "conference"
},
{
"id": 15,
"lat": 47.070714,
"long": 15.439504,
"title1": "DH 2023",
"title2": "Universität Graz, 10-14.07.2023",
"type": "conference"
},
{
"id": 16,
"lat": 49.795304,
"long": 9.937457,
"title1": "CCLS 2023",
"title2": "Universität Würzburg, 22-23.06.2023",
"type": "conference"
},
{
"id": 17,
"lat": 43.318011,
"long": 11.331428,
"title1": "AIUCD 2023",
"title2": "Università di Siena, 5-7.06.2023",
"type": "conference"
},
{
"id": 18,
"lat": 49.611622,
"long": 6.124135,
"title1": "DHd 2023",
"title2": "Universität Luxembourg, 13-17.03.2023",
"type": "conference"
}
]
let markers = [];
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

  if (location.type === 'conference') {
    marker.setIcon(new L.Icon({
      iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
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
