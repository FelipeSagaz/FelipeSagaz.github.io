const botaoEnviar = document.querySelector("#enviar");
botaoEnviar.addEventListener("click", function(event){
  event.preventDefault();

  let form = document.querySelector("#form-envia");
  let dados = otbemDadosVeiculo(form);
  let erros = validaDadosVeiculo(dados);

  if(erros.length > 0){
		exibeMensagensDeErroVeiculo(erros);
		return;
	}

  form.reset();
  let ulErro = document.querySelector("#mensagem-erro");
	ulErro.innerHTML = "";
  alert("O veículo foi cadastrado com sucesso!");

});

const otbemDadosVeiculo = (form) => {

	let dados = {
		placa: form.placa.value,
    renavan: form.renavan.value,
    anoFabricação: form.anoFabricação.value,
    anoCompra: form.anoCompra.value,
    carga: form.carga.value,
    eixos: form.eixos.value,
		cumprimento: form.cumprimento.value,
	}
	return dados;
}

const validaDadosVeiculo = (dados) => {
	let erros = [];

	if(dados.placa.length != 7) erros.push ("A Placa do veículo precisa ser válido");
  if(dados.renavan.length != 11) erros.push ("O Renavan precisa ser válido");
  if(dados.anoFabricação.length != 4) erros.push ("O ano de fabricação precisa ser válido");
  if(dados.anoCompra.length != 4) erros.push ("O ano de compra precisa ser válido");
  if(dados.carga.length == 0 || dados.carga > 400) erros.push ("A carga máxima precisa ser válida");
  if(dados.eixos.length == 0 || dados.eixos > 15) erros.push ("O número de eixos precisa ser válido");
	if(dados.cumprimento.length == 0 || dados.cumprimento > 100) erros.push ("O cumprimento precisa ser válido");

	return erros;
}

const exibeMensagensDeErroVeiculo = (erros) => {
		let ul = document.querySelector("#mensagem-erro");
		ul.innerHTML = "";
		erros.forEach(function(erro){
			let li = document.createElement("li");
			li.textContent = erro;
			ul.appendChild(li);
		});
}
