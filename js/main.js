function openCourse(Course) {
    var i, x, y;
    x = document.getElementsByClassName("schedule");
    y = document.getElementById(Course);
    for(i=0;i<x.length;i++){
        x[i].style.display = 'none';
    }
    y.style.display = "block";
    y.className = y.className + ' ' + Course.toLowerCase();
}

function initMap() {
    var myLatlng = {lat: -23.482069, lng: -47.425131};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: myLatlng
});

var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    title: 'Click to zoom'
});

  map.addListener('center_changed', function() {
    // 3 seconds after the center of the map has changed, pan back to the
    // marker.
    window.setTimeout(function() {
      map.panTo(marker.getPosition());
    }, 3000);
  });

  marker.addListener('click', function() {
    map.setZoom(8);
    map.setCenter(marker.getPosition());
  });
}
