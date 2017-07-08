function initialize() {
  var curr_pos = {lat: 32.895770, lng: -117.193011};
  var map = new google.maps.Map(document.getElementById('map'), {
    center: curr_pos,
    zoom: 14
  });
  var panorama = new google.maps.StreetViewPanorama(
      document.getElementById('pano'), {
        position: curr_pos,
        pov: {
          heading: 34,
          pitch: 10
        }
      });
  map.setStreetView(panorama);
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
