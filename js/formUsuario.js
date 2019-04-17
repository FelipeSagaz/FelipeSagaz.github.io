const botaoEnviar = document.querySelector("#enviar");
botaoEnviar.addEventListener("click", function(event){
  event.preventDefault();

  let form = document.querySelector("#form-envia");
  let dados = otbemDadosUsuario(form);
  let erros = validaDadosUsuario(dados);

  if(erros.length > 0){
		exibeMensagensDeErroUsuario(erros);
		return;
	}

  form.reset();
  let ulErro = document.querySelector("#mensagem-erro");
	ulErro.innerHTML = "";
  alert("O usuário foi cadastrado com sucesso!");

});

const otbemDadosUsuario = (form) => {

	let dados = {
		nome: form.nome.value,
    sobrenome: form.sobrenome.value,
    data: form.data.value,
    cpf: form.cpf.value,
    cnh: form.cnh.value,
    endereço: form.endereço.value,
		email: form.email.value,
    cel: form.cel.value,
	}
	return dados;
}

const validaDadosUsuario = (dados) => {
	let erros = [];

	if(dados.nome.length <= 2) erros.push ("O Nome precisa ser válido");
	if(dados.sobrenome.length <= 2) erros.push ("O Sobrenome precisa ser válido");
  if(dados.data.length == 0) erros.push ("A data precisa ser válida");
	if(dados.cpf.length != 11) erros.push ("O CPF precisa ser válido e conter apenas números");
  if(dados.cnh.length != 11) erros.push ("A carteira de motorista precisa ser válida e conter apenas números");
  if(dados.endereço.length == 0) erros.push ("O endereço não pode ficar em branco");
	if(dados.email.indexOf("@") == -1 || dados.email.indexOf(".") == -1 || dados.email.length <= 6) erros.push ("O e-mail precisa ser válido");
  if(dados.cel.length != 10) erros.push ("O número de celular precisa ser válido, ter o DDD e conter apenas números");

	return erros;
}

const exibeMensagensDeErroUsuario = (erros) =>{
		let ul = document.querySelector("#mensagem-erro");
		ul.innerHTML = "";
		erros.forEach(function(erro){
			let li = document.createElement("li");
			li.textContent = erro;
			ul.appendChild(li);
		});
}
