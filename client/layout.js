Template.login.events({
    'click #facebook-login': function(event) {
        Meteor.loginWithFacebook({requestPermissions: ['email', 'public_profile', 'user_photos']}, function(err){
          
				console.log(err);
		
			
        });
    },
 



		
});









