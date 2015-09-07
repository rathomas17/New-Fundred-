

//END OF GOOGLE MAPS JAVASCRIPT


 Template.Map.rendered = function() {

   function myFunction() {
       location.reload();
   }

   var map = new google.maps.Map(document.getElementById('google'), {
      zoom: 4,
      center: myLatLng
    });

        // create a map in the "map" div, set the view to a given place and zoom-divi yaz
      //var map = L.map('map').setView([42.37, -71.127], 10);
      var myLatLng = {lat: -25.363, lng: 131.044};
      var markerpos = {lat: 42.37, lng: -71.127};

      var marker = new google.maps.Marker({
    position: markerpos,
    map: map,
    title: 'Hello World!'
  });
      //L.Icon.Default.imagePath = '/packages/bevanhunt_leaflet/images';

      // add an OpenStreetMap tile layer


       L.tileLayer.provider('Stamen.Toner').addTo(map);

      // add a marker in the given location, attach some popup content to it and open the popup

    var moneyicon = L.icon({
    iconUrl: 'moneyicon.png',

    iconSize:     [50, 60], // size of the icon
    iconAnchor:   [40, 40], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -40] // point from which the popup should open relative to the iconAnchor
    });



      var markers=Fundreds.find();

      markers.forEach(function(element,index,array){
        var image = FundredImages.findOne(element.imageId);
        var popup = L.popup({className:'popup'})
                          .setContent('<h3 class="popuptext">'+element.name+ '</h3> <img src="'+image.url()+'" style="width:100px"/>');

        L.marker(element.location, {icon: moneyicon}).addTo(map)
        .bindPopup(popup);



      });

 };



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
  GoogleMaps.ready('map', function(map){
    // Add a marker to the map once it's ready
    var marker = new google.maps.Marker({
      position: map.options.center,
      map: map.instance
    });
  });
});
