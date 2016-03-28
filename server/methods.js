Meteor.methods({
	'listar': function(token, id) {
		var FB = Npm.require('fb');
		var linkk = "teste";
		FB.setAccessToken(token);
		FB.api("me/albums?fields=privacy,id",
		Meteor.bindEnvironment(function (response) {
			if (response && !response.error) {console.log(response);
				var index1;
				
				for	(index1 = 0; index1 < response.data.length; index1++) {
					if(response.data[index1].privacy ==  'everyone'){
					console.log("entrou");
					FB.api("/" + response.data[index1].id + "/photos",
					Meteor.bindEnvironment(function (response) {
					if (response && !response.error) {
						  var index2;
						  for	(index2 = 0; index2 < response.data.length; index2++) {
						  FB.api("/" + response.data[index2].id + "?fields=id,name,picture,likes,images",
					      Meteor.bindEnvironment(function (response) {
							var index;
							for	(index = 0; index < response.images.length; index++) {
							if(response.images[index].width >= 400 && response.images[index].width < 500 ){
								if(Picture.find({link : response.images[index].source, idFace: id}).count() == 0){
									 var total = 0;
									 if(response.likes = 'undefined'){
										 total = 0;
									 }
									 else{
										 total = response.likes.data.length;
									 }
									Picture.insert({link : response.images[index].source, idFace: id, idPhoto : response.id , totalLikes : total })
								}
							}							
							}
						    }
							))
							
							}
						}
					})
				) } }
			}
		  	
		  })
		)
	},
	
	'curtir': function(token, id) {
		var FB = Npm.require('fb');
		FB.setAccessToken(token);
		console.log("/" + id + "/likes");
		FB.api("/" + id + "/likes",'post',{}, function (res) {console.log(res);});
		
	}
		
	
	
	
});