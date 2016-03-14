Template.menu.events({'click #logout': function(event) {
        Meteor.logout(function(err){
            if (err) {
                throw new Meteor.Error("Logout failed");
            }
			else{Router.go('/');}
        })
	},
	
	'click #router-image': function(event) {
       Meteor.call('listar', Meteor.users.findOne().services.facebook.accessToken, this.idFacebook);
		
						$('#modalimagem').modal('show');
						
	}
	
						
						});
		
      
	
	

					


	