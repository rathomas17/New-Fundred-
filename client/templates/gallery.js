 Template.GalleryItem.events ({
  "click #likebutton": function(){
    var fundredtolike=Template.currentData();
    Fundreds.update(fundredtolike._id, {$inc: {like: 1}});

  }

 });

Template.Gallery.helpers({
  fundreds: function(){
    return Fundreds.find();
  }
});

Template.GalleryItem.helpers({
  image: function(){
    return FundredImages.findOne(this.imageId);
    return FundredImages.findOne(this.image2Id);
  }


});

Template.GalleryOpen.helpers({
  image: function(){
    return FundredImages.findOne(this.imageId);
    return FundredImages.findOne(this.image2Id);
  }
});
