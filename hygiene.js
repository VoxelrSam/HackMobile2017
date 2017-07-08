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
 var fitness_and_motion = new google.maps.Marker({
    position: {lat: 32.904100, lng: -117.190318},
    map: map
  });
  
  var san_diego_fitness = new google.maps.Marker({
    position: {lat: 32.905543, lng: -117.214510},
    map: map
  });
  
  var la_fitness = new google.maps.Marker({
  	position: {lat: 32.908238,lng:-117.172134},
    map: map
  });
}
