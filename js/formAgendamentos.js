const botaoAdicionar = document.querySelector("#enviar");
botaoAdicionar.addEventListener("click", function(event){
	event.preventDefault();

	let form = document.querySelector("#form-envia");

	let agendamento = otbemDadosDoFormulario(form);

	let erros = validaAgendamento(agendamento);

	if(erros.length > 0){
		exibeMensagensDeErro(erros);
		return;
	}
  adicionaAgendamentoNaTabela(agendamento);

  form.reset();
  let ulErro = document.querySelector("#mensagem-erro");
  ulErro.innerHTML = "";
});

const otbemDadosDoFormulario = (form) => {

	let agendamento = {
		nome: form.nome.value,
		veiculo: form.veiculo.value,
		dataEntrada: form.dataEntrada.value,
		dataSaida: form.dataSaida.value,
		operação: form.operação.value
	}

	return agendamento;
}

const exibeMensagensDeErro = (erros) => {
		var ul = document.querySelector("#mensagem-erro");
		ul.innerHTML = "";
		erros.forEach(function(erro){
			var li = document.createElement("li");
			li.textContent = erro;
			ul.appendChild(li);
		});
}

const adicionaAgendamentoNaTabela = (agendamento) => {
	let agendamentoTr = montaTr(agendamento);
	let tabela = document.querySelector("#tabela-agendamentos");
	tabela.appendChild(agendamentoTr);
}

const montaTr = (agendamento) => {
    let agendamentoTr = document.createElement("tr");
    agendamentoTr.classList.add("paciente");

    agendamentoTr.appendChild(montaTd(agendamento.nome,"info-nome"));
    agendamentoTr.appendChild(montaTd(agendamento.veiculo,"info-veiculo"));
    agendamentoTr.appendChild(montaTd(agendamento.dataEntrada,"info-entrada"));
    agendamentoTr.appendChild(montaTd(agendamento.dataSaida,"info-saida"));
    agendamentoTr.appendChild(montaTd(agendamento.operação,"info-operação"));

    return agendamentoTr;
}

const montaTd = (dado,classe) => {
	let td = document.createElement("td");
	td.textContent = dado;
	td.classList.add(classe);
	return td;
}

const validaAgendamento = (agendamento) => {
	var erros = [];

	if(agendamento.nome.length <= 2) erros.push ("O Nome do Motorista precisa ser válido");
	if(agendamento.veiculo.length != 7) erros.push ("A Placa do veículo precisa ser válido");
	if(agendamento.dataEntrada.length == 0) erros.push ("A data de entrada precisa ser válida");
	if(agendamento.dataSaida.length == 0) erros.push ("A data de saída precisa ser válida");
  if(agendamento.operação.length == 0) erros.push ("A Operação não pode ficar em branco");

	return erros;
}
