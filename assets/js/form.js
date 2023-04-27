const $cepInput = document.querySelector('input[name="cep"]');

async function consultaCEP(cepDoUsuario) {
	// const erro = document.querySelector("#error");
	// erro.innerHTML = "";

	try {
		const cepRecebido = await fetch(`https://viacep.com.br/ws/${cepDoUsuario}/json/`);
		const respostaConvertida = await cepRecebido.json();

		if(respostaConvertida.error) throw Error("Endereço invalido ou não encontrado!");

		return respostaConvertida;

	} catch (error) {
		//erro.innerHTML = `<h2>${error}</h2>`;
		console.log(error);
	}

}

$cepInput.addEventListener('blur', async (input) => {
	const resposta = await consultaCEP(input.target.value);
	preencheFormulario(resposta);
});

function preencheFormulario({bairro, localidade, logradouro, uf}) {
    document.querySelector('input[name="endereco"]').value = logradouro;
    document.querySelector('input[name="bairro"]').value = bairro;
    document.querySelector('input[name="cidade"]').value = localidade;
	document.querySelector('select[name="estado"]').value = uf;
}

