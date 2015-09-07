

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




//GOOGLE MAPS JAVASCRIPT

Template.google.rendered = function (){


$('canvas').remove();

GoogleMaps.load();



};
Template.google.events ({

/*'click #google':function (event){
  var bangalore = { lat: 12.97, lng: 77.59 };
  var map = new google.maps.Map(document.getElementById('google'), {
    zoom: 12,
    center: bangalore
  });
  addMarker (event.latLng, map);


} */
  //google.maps.event.addListener(map, 'click', function(event) {
    //  addMarker(event.latLng, map);
    //});


});
Template.google.helpers({
  mapOptions: function() {

  /*  if (GoogleMaps.loaded()) {
      return {
        center: new google.maps.LatLng(39.9611111, -82.9988889),
        zoom: 8
      };
    }*/

    if (GoogleMaps.loaded()) {



        return {
          center: new google.maps.LatLng(39.9611111, -82.9988889),
          zoom: 8




        };
      }



  }




 });





