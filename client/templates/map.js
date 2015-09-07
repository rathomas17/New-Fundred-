Template.google.events ({
  'click': function(event){
    alert('amap clicked', event.target);
    var myLatLng = {lat: 38.9881, lng: -82.0444};


    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: myLatLng
      });

      var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Hello World!'
      });

  }

});

Template.google.helpers({
  mapOptions: function() {
    if (GoogleMaps.loaded()) {
      return {
        center: new google.maps.LatLng(39.9881, -83.0444),
        zoom: 12
      };
    }
  }
});

Template.google.onCreated(function(){
  GoogleMaps.ready('google', function(map){
    // Add a marker to the map once it's ready
    var marker = new google.maps.Marker({
      position: map.options.center,
      map: map.instance
    });
  });
});