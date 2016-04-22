insereEscolhido = function (idPicture, quantidade){
    if(quantidade < 0 || quantidade == ""){
		toastr.error("deve ser informado um total de like");
	}
	else{

	if (UsuarioGlobal.pontos > quantidade){
	foto = Picture.findOne({_id: idPicture});
	Curtidas.insert({link : foto.link, total : quantidade, idPhoto : foto.idPhoto, idFace : Meteor.users.findOne().services.facebook.id});
	Usuario.update(UsuarioGlobal._id, {

        $set: {pontos : UsuarioGlobal.pontos - quantidade}

      });
	  toastr.success("Sucesso!, voce ainda possui " + UsuarioGlobal.pontos + " pontos");
	}else{
		toastr.error("Voce nao possui pontos suficiente");
	}
	
	}
}