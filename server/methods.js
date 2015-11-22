Meteor.methods({
	'insertFundred': function(name, fundredName, lat, lng, imgId){
		Fundreds.insert({name:name,fundredname:fundredName,location:[lat,lng],imageId:imgId,uploadedAt: new Date(),like:0});
	},
	'addMarker': function(marker){
		
	}
});
