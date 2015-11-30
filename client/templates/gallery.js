Template.Gallery.rendered = function() {


  function FindNext () {
             var str = document.getElementById ("findInput").value;
             if (str == "") {
                 alert ("Please enter some text to search!");
                 return;
             }

             if (window.find) {        // Firefox, Google Chrome, Safari
                 var found = window.find (str);
                 if (!found) {
                     alert ("The following text was not found:\n" + str);
                 }
             }
             else {
                 alert ("Your browser does not support this example!");
             }
         }


};




 Template.GalleryItem.events ({
  "click #likebutton": function(){
    var fundredtolike=Template.currentData();
    Fundreds.update(fundredtolike._id, {$inc: {like: 1}});

  }

 });

 Template.Gallery.events ({


 });

 Template.Gallery.events ({
    "click #findNext": function FindNext () {
               var str = document.getElementById ("findInput").value;
               if (str == "") {
                   alert ("Please enter some text to search!");
                   return;
               }

               if (window.find) {        // Firefox, Google Chrome, Safari
                   var found = window.find (str);
                   if (!found) {
                       alert ("The following text was not found:\n" + str);
                   }
               }
               else {
                   alert ("Your browser does not support this example!");
               }
           }

 });

 Template.Gallery.events ({


 });

Template.Gallery.helpers({
  fundreds: function(){
    return Fundreds.find();
  }
});

Template.GalleryItem.helpers({
  image: function(){
    return FundredImages.findOne(this.imageId);



},

image2: function(){
return FundredImages.findOne(Session.get("selectedImage2Id"));
  return FundredImages.findOne(this.image2Id);

},


//
/*
imageone: function(){
  return FundredImages.findOne(Session.get("selectedImageId"));
},
imagetwo: function(){
  return FundredImages.findOne(Session.get("selectedImage2Id"));
}
*/
//

});

Template.GalleryOpen.helpers({
  image: function(){
    return FundredImages.findOne(this.imageId);

  },
  image2: function(){
    return FundredImages.findOne(Session.get("selectedImage2Id"));
    return FundredImages.findOne(this.image2Id);
  }

});
