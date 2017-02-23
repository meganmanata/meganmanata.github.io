var map;
  
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 40.754931, lng: -73.984019}, 
      zoom: 15,
      styles: [
  {
    "featureType": "landscape",
    "stylers": [
      {
        "color": "#f7ead7"
      }
    ]
  },
  {
    "featureType": "poi",
    "stylers": [
      {
        "color": "#e31d19"
      },
      {
        "visibility": "simplified"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "road",
    "stylers": [
      {
        "color": "#deac11"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#efc034"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  }
]
   });

// var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
// marker.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png')
var marker = new google.maps.Marker({
      position: {lat: 40.762408, lng: -73.985378}, 
      map: map
      // icon: ('http://maps.google.com/mapfiles/ms/icons/green-dot.png')
      // icon: image
    });

var marker = new google.maps.Marker({
      position: {lat: 40.749819, lng: -73.994811}, 
      map: map
    });


 }