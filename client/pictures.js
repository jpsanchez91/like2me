insereEscolhido = function (idPicture, quantidade){
    if(quantidade < 0 || quantidade == ""){
		alert("deve ser informado um total de like");
	}
	else{

	if (UsuarioGlobal.pontos > quantidade){
	foto = Picture.findOne({_id: idPicture});
	Curtidas.insert({link : foto.link, total : quantidade, idPhoto : foto.idPhoto});
	Usuario.update(UsuarioGlobal._id, {

        $set: {pontos : UsuarioGlobal.pontos - quantidade}

      });
	  alert("Sucesso!, voce ainda possui " + UsuarioGlobal.pontos + " pontos");
	}else{
		alert("Voce nao possui pontos suficiente");
	}
	
	}
}