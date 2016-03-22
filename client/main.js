id = "";

Accounts.onLogin(function() {
			
			
				     if(Meteor.users.find().count() > 0){
			if(Usuario.find({email : Meteor.users.findOne().services.facebook.email}).count() == 0){
							Usuario.insert({email : Meteor.users.findOne().services.facebook.email,
							idFacebook : Meteor.users.findOne().services.facebook.id,
							name : Meteor.users.findOne().services.facebook.name,
							pontos : 1000});} 
				
			    id = Meteor.users.findOne().services.facebook.id;
     			
				console.log(Meteor.users.findOne().services.facebook.accessToken);
				Template.likes.helpers({

			usuarioFace : function() {
			return Usuario.find({idFacebook : id}); }
						});
						
			Deps.autorun(function() {vals = Usadas.find().map(function(a){return a.idPhoto;})});
						
						Template.links.helpers({

			data : function() {
			return Curtidas.findOne({idPhoto : {$nin: vals}}); }
						});
						
						
						Template.picture.helpers({
		Pictures : function() {
			return Picture.find({idFace: id}); }
						});

			Deps.autorun(function() {data = Curtidas.findOne({idPhoto : {$nin: vals}});});
			Deps.autorun(function() {UsuarioGlobal = Usuario.findOne({idFacebook : id});}); 
			Router.go('/likes');			
							
		}
			
			});