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

Router.route('/paintback', function(){
  this.render('Paintback')
} );

Router.route('/mobilepaint', function(){
  this.render('Mobilepaint')
} );

Router.route('/submitdrawing', function(){
  this.render('Submission')
} );

Router.route('/soloregistration', function(){
  this.render('Soloregistration')
} );

Router.route('/groupregistration', function(){
  this.render('Groupregistration')
} );

Router.route('/google4531c5c92c97d36e.html', function(){
  this.render('google4531c5c92c97d36e.html')
} );


Router.route('/gallery/:_fundredId', function(){
  item=Fundreds.findOne({_id: this.params._fundredId});
  this.render('GalleryOpen',{data:item})
} );

Router.onBeforeAction(function(){
  GoogleMaps.load();
  this.next();
}, { only: ['google']});
