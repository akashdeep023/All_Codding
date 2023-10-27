// TO MAKE THE MAP APPEAR YOU MUST
// ADD YOUR ACCESS TOKEN FROM
// https://account.mapbox.com
mapboxgl.accessToken = mapToken;    //show.ejs ke script se mapToken
const map = new mapboxgl.Map({
    container: 'map', // container ID
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: listing.geometry.coordinates, // starting position [lng, lat]
    zoom: 10 // starting zoom
});

// console.log(coordinates);           //show.ejs ke script se coordinates
const marker1 = new mapboxgl.Marker({color: 'red'})     //add marker in map
.setLngLat(listing.geometry.coordinates)       //Listing.geometry.coordinates
.setPopup(new mapboxgl.Popup({offset: 25}).setHTML(`<h5>${listing.title}</h5><p><b>${listing.location}, ${listing.country}</b></p><p>Exact location will be provided after booking!</p>`))      //add popup in marker
.addTo(map);
