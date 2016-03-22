  Template.links.events({

    "click #likebutton": function () {
	  Usadas.insert({idFacebook : this.idFacebook , idPhoto : data.idPhoto});
      Usuario.update(this._id, {

        $set: {pontos : this.pontos + 1}

      });
	}

    })