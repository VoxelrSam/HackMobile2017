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
 var feeding_san_diego = new google.maps.Marker({
    position: {lat: 32.900649, lng: -117.183596},
    map: map
  });
  
  var san_diego_food_bank = new google.maps.Marker({
    position: {lat: 32.887235, lng: -117.164237},
    map: map
  });
  
  var meals_on_wheels = new google.maps.Marker({
  	position: {lat: 32.886421,lng:-117.226656},
    map: map
  });
}
