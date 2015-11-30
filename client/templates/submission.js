
 Template.Submission.rendered = function(){

   function myFunction() {
    location.reload();
}
    Dropzone.autoDiscover = false;

   // Adds file uploading and adds the imageID of the file uploaded
   // to the arrayOfImageIds object.
   var arrayOfImageIds = [];

    mydropzone = new Dropzone("#mydropzone", {
       thumbnailWidth: 180,
      thumbnailHeight: 180,
       dictDefaultMessage: "Drag and Drop Fundreds    or click",
       acceptedFiles: ".jpeg,.jpg,.png,.gif,.JPEG,.JPG,.PNG,.GIF,.pdf,.pub",
       accept: function(file, done){
          FundredImages.insert(file, function(err, fileObj){
                if(err){
                  alert("Error");
                } else {
                  // gets the ID of the image that was uploaded
                  var imageId = fileObj._id;
                  Session.set('selectedImageId',imageId);
                  // do something with this image ID, like save it somewhere
                  arrayOfImageIds.push(imageId);

                  var image2Id = fileObj._id;

                  Session.set('selectedImage2Id',image2Id);
                  arrayOfImageIds.push(image2Id);
                }
            });
                // Create the remove button
                var removeButton = Dropzone.createElement("<button>Remove file</button>");
                var _this = this;
                removeButton.addEventListener("click", function(e) {
                  // Make sure the button click doesn't submit the form:
                 e.preventDefault();
                 e.stopPropagation();
                  // Remove the file preview. And delete it from TempImage.
               _this.removeFile(file);
                 console.log(_this);
                 //TempImage.remove({"_id":Session.get('selectedImageId')});

                  });
                // Add the button to the file preview element.
                file.previewElement.appendChild(removeButton);


        }

    });

};
 Template.Submission.helpers({

      lat: function(){
        if (Geolocation.latLng() !=null)
        return Geolocation.latLng().lat;
        else
        return "waiting for latitude";
      },
      lng: function(){
        if (Geolocation.latLng() !=null)
        return Geolocation.latLng().lng;
        else
        return "waiting for longitude";
      },
      image: function(){
        return FundredImages.findOne(Session.get("selectedImageId"));
      },
      image2: function(){
        return FundredImages.findOne(Session.get("selectedImage2Id"));
      }
 });

 Template.Submission.events ({
"click #submit-button": function(){
  var name = $("#Name").val();
  var fundredname = $("#FundredName").val();
  var lat = $("#Lat").val();
  var lng = $("#Lng").val();
  var imgId = Session.get("selectedImageId");
  var img2Id = Session.get("selectedImage2Id");



//


//var img2=can2[0].toDataURL("image2/png");



//



  Markers.insert({name:name, latitude: lat, longitude: lng}, function(marker){
    Fundreds.insert({name:name,fundredname:fundredname,location:[lat,lng],imageId:imgId, image2Id:img2Id, uploadedAt: new Date(),like:0, marker_id:marker._id});

  });
  Router.go("/google");



}

});
