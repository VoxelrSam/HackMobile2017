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
  
  var st_vicente_de_paul = new google.maps.Marker({
    position: {lat: 32.705992, lng: -117.149879},
    map: map
  });
  
  var rachels_womens_shelter = new google.maps.Marker({
    position: {lat: 32.713583, lng: -117.157112},
    map: map
  });
  
  var father_joes_village = new google.maps.Marker({
  	position: {lat: 32.714935,lng:-117.121955},
    map: map
  });
}
