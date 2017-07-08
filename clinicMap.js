function initMap() {
  var center = {lat: 32.895770,lng: -117.193011};
  var icon = {
  	url:'http://www.orientini.com/1/images/blue-location-icon-location_icon.png',
    scaledSize: new google.maps.Size(20, 20), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0)
  }
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: center
  });
  var features  = [
  {
  	position: center
  }
  ]
  features.forEach(function(features) {
    var marker = new google.maps.Marker({
      position: features.position,
      icon: icon,
      map: map
    });
  });
  
  var scripps_clinic = new google.maps.Marker({
    position: {lat: 32.893317, lng: -117.201080},
    map: map
  });
  
  var sharp_health_care = new google.maps.Marker({
    position: {lat: 32.906531, lng: -117.180571},
    map: map
  });
  
  var planned_parenthood = new google.maps.Marker({
  	position: {lat: 32.914247, lng:-117.142466},
    map: map
  });
}
