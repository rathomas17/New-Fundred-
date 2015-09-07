Router.route('/', function () {
  this.render('Home')
});

Router.route('/map', function(){
  this.render('Map')
} );

Router.route('/google', function(){
  this.render('Google')
} );


Router.route('/gallery', function(){
  this.render('Gallery')
} );

Router.route('/submit', function(){
  this.render('Drawing')
} );

Router.route('/paint', function(){
  this.render('Paint')
} );


Router.route('/submitdrawing', function(){
  this.render('Submission')
} );

Router.route('/dropzone', function(){
  this.render('Dropzone')
} );

Router.route('/gallery/:_fundredId', function(){
  item=Fundreds.findOne({_id: this.params._fundredId});
  this.render('GalleryOpen',{data:item})
} );