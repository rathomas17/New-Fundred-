Template.Home.rendered = function(){




};





  Template.Home.events ({
 "click #solo": function(){

   Router.go("/soloregistration");
  }


 });

 Template.Home.events ({
"click #group": function(){

  Router.go("/groupregistration");
 }


});
