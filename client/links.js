  Template.links.events({

    "click #likebutton": function () {
	  Meteor.call('curtir', Meteor.users.findOne().services.facebook.accessToken, data.idPhoto);
	  Usadas.insert({idFacebook : this.idFacebook , idPhoto : data.idPhoto});
      Usuario.update(this._id, {

        $set: {pontos : this.pontos + 1}

      });
	  Curtidas.update(data._id, {

        $set: {total : data.total - 1}

      });
	  
		if(data.total <= 0){
			Curtidas.remove(data._id);
		}
	  console.log(data.total);
	},
	
	    "click #skip": function () {
	  Usadas.insert({idFacebook : this.idFacebook , idPhoto : data.idPhoto});
   
	}

    })