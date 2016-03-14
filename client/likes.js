  Template.likes.events({

    "click #likebutton": function () {

      Usuario.update(this._id, {

        $set: {pontos : this.pontos + 1}

      });
	}

    })