let mapOptions = {
center:[48.1486, 17.1077],
zoom:3
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
"title1": "Università di Torino",
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
"title1": "Università di Padova",
"title2": "Joint PhD, 2023-",
"type":"study"
},
{
"id": 6,
"lat": 52.41762, 
"long": 13.0636,
"title1": "DHd 2022",
"title2": "Universität Potsdam, 7-11.03.2023",
"type":"conference"
},
{
"id": 7,
"lat": 49.8728256, 
"long": 8.6511949,
"title1": "CCLS 2022",
"title2": "Technische Universität Darmstadt, 31.05-2.06.2022",
"type":"conference"
},
{
"id": 8,
"lat": 50.85792,  
"long": 7.08365,
"title1": "Workshop on Computational Drama Analysis",
"title2": "Universität zu Köln, 15-16.09.2022",
"type":"conference"
},
{
"id": 9,
"lat": 31.798418, 
"long": 35.239469,
"title1": "1st HUBJ-FUB DH Winter School",
"title2": "Hebrew University of Jerusalem, 27.02-1.03.2023",
"type":"conference"
},
{
"id": 10,
"lat": 49.611622,
"long": 6.124135,
"title1": "DHd 2023",
"title2": "Universität Luxembourg, 13-14.03.2023",
"type": "conference"
},
{
"id": 11,
"lat": 49.755868, 
"long": 6.638778,
"title1": "DHd 2023",
"title2": "Universität Trier, 15-17.03.2023",
"type":"conference"
},
{
"id": 12,
"lat": 43.318011,
"long": 11.331428,
"title1": "AIUCD 2023",
"title2": "Università di Siena, 5-7.06.2023",
"type": "conference"
},
{
"id": 13,
"lat": 49.795304,
"long": 9.937457,
"title1": "CCLS 2023",
"title2": "Universität Würzburg, 22-23.06.2023",
"type": "conference"
},
{
"id": 14,
"lat": 47.070714,
"long": 15.439504,
"title1": "DH 2023",
"title2": "Universität Graz, 10-14.07.2023",
"type": "conference"
},
{
"id": 15,
"lat": 59.436960,
"long": 24.753574,
"title1": "CUDAN 2023",
"title2": "University of Tallinn, 13-16.12.2023",
"type": "conference"
},
{
"id": 16,
"lat": 45.409540,
"long": 11.876550,
"title1": "Digital Philology Seminar",
"title2": "Università di Padova, 13.02.2024",
"type": "conference"
},
{
"id": 17,
"lat": 48.573405,
"long": 13.460086,
"title1": "DHd 2024",
"title2": "Universität Passau, 26.02-1.03.2024",
"type": "conference"
},
{
"id": 18,
"lat": 38.8799697,
"long": -77.1067698,
"title1": "DH 2024",
"title2": "George Mason University, 6.08-9.08.2024",
"type": "conference"
},
{
"id": 19,
"lat": 37.5073,
"long": 15.0873,
"title1": "AIUCD 2024",
"title2": "Università di Catania, 28-30.05.2024",
"type": "conference"
},
{
"id": 20,
"lat": 48.2082,
"long": 16.3738,
"title1": "CLS INFRA/DraCor Training School + CCLS 2024",
"title2": "Universität Wien, 10-15.06.2024",
"type": "conference"
},
{
"id": 21,
"lat": 44.40478000,
"long": 8.94439000,
"title1": "SRDH Doctoral Symposium",
"title2": "Università di Genova, 21-22.05.2024",
"type": "conference"
},
{
"id": 22,
"lat": 51.49380069817352,
"long": 11.969547012172603,
"title1": "Workshop: Digitale Komparatistik: Perspektiven und Strategien",
"title2": "Universität Halle, 14-15.11.2024",
"type": "seminar"
},
{
"id": 23,
"lat": 47.39330981787114,
"long": 0.6866973259950495,
"title1": "Seminar, Humanités Numériques Tourangelles",
"title2": "University of Tours, 04.02.2025",
"type": "seminar"
},
{
"id": 24,
"lat": 49.590840622199885,
"long": 11.00094220119949,
"title1": "Digital Humanities Kolloquium, University of Erlangen-Nuremberg",
"title2": "Universität Erlangen-Nuremberg, 27-28.02.2025",
"type": "seminar"
},
{
"id": 25,
"lat": 52.02272524655956, 
"long": 8.531584176662534,
"title1": "DHd 2025",
"title2": "Universität Bielefeld, 04-07.03.2025",
"type": "seminar"
},
{
"id": 26,
"lat": 38.74726374726814, 
"long": -9.149096529080209,
"title1": "DH 2025",
"title2": "NOVA University of Lisbon, 14-18.07.2025",
"type": "seminar"
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
  
  if (location.type === 'seminar') {
    marker.setIcon(new L.Icon({
      iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png',
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
