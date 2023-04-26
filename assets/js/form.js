const $cepInput = document.querySelector('input[name="cep"]');

const consultaCEP = async (userCEP) => {
    await fetch(`https://viacep.com.br/ws/${userCEP}/json/`)
        .then(resposta => resposta.json())
	.then(resultado => {
		try {
		    console.log(resultado);
		    if(resultado.erro)
			throw Error("Endereço invalido ou não encontrado!");
		    return resultado;
		} catch(erro) {
		    console.log(erro);
		}
	});

}

$cepInput.addEventListener('blur', async (input) => {
	console.log(input.target.value);
	const resposta = await consultaCEP(input.target.value);
	preencheFromulario(resposta);
});

function preeincheFormulario({bairro, localidade, logadouro, uf}) {
    document.querySelector('input[name="endereco"]').value = logadouro;
    document.querySelector('input[name="bairro"]').value = bairro;
    document.querySelector('input[name="cidade"]').value = localidade;
}

