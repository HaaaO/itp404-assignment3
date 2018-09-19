

let successHandler = function(position) {
  let localPosition = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
  console.log(localPosition);


  let map = new google.maps.Map(document.getElementById('map'), {
    center: localPosition,
    zoom: 13
  });

  var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
  let Marker = new google.maps.Marker({
    map: map,
    position: localPosition,
    icon: iconBase + 'parking_lot_maps.png',
    animation: google.maps.Animation.BOUNCE
  });


  var infoWindow;
  let geocoder = new google.maps.Geocoder();

  geocoder.geocode({
    location: localPosition
  }, function(geocoderResults) {

      infoWindow = new google.maps.InfoWindow({
        position: localPosition,
        content: geocoderResults[0].formatted_address
      });

  });


  google.maps.event.addListener(Marker, 'click', function() {
    infoWindow.open(map);
  });
  //console.log(position.coords.latitude, position.coords.longitude);
};
let errorHandler = function(error) {};
let options = {};

navigator.geolocation.getCurrentPosition(successHandler, errorHandler, options);
