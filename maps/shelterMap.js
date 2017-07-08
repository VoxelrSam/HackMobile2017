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
