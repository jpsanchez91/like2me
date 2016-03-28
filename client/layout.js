Template.login.events({
    'click #facebook-login': function(event) {
        Meteor.loginWithFacebook({requestPermissions: ['email', 'public_profile', 'user_photos', 'publish_actions']}, function(err){
          
				console.log(err);
		
			
        });
    },
 



		
});









