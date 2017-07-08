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
  
  var lasting_recovery_rehab_center = new google.maps.Marker({
  	position: {lat: 32.897188,lng: -117.190279},
    map: map
  });
  
  var scripps_clinic = new google.maps.Marker({
    position: {lat: 32.893317, lng: -117.201080},
    map: map
  });
  
  var rachels_womens_shelter = new google.maps.Marker({
    position: {lat: 32.713583, lng: -117.157112},
    map: map
  });
  
  var planned_parenthood = new google.maps.Marker({
  	position: {lat: 32.914247, lng:-117.142466},
    map: map
  });
  
  var sd_food_bank = new google.maps.Marker({
  	position: {lat: 32.887234, lng:-117.164291},
    map: map
  });
}
