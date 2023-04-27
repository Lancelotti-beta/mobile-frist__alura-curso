const $cepInput = document.querySelector('input[name="cep"]');

<<<<<<< HEAD
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
=======
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
>>>>>>> b3f61100d41f7eecf1b2df06aba968a7739a5f34

}

$cepInput.addEventListener('blur', async (input) => {
<<<<<<< HEAD
	const resposta = await consultaCEP(input.target.value);
	preencheFormulario(resposta);
});

function preencheFormulario({bairro, localidade, logradouro, uf}) {
    document.querySelector('input[name="endereco"]').value = logradouro;
    document.querySelector('input[name="bairro"]').value = bairro;
    document.querySelector('input[name="cidade"]').value = localidade;
	document.querySelector('select[name="estado"]').value = uf;
=======
	console.log(input.target.value);
	const resposta = await consultaCEP(input.target.value);
	preencheFromulario(resposta);
});

function preeincheFormulario({bairro, localidade, logadouro, uf}) {
    document.querySelector('input[name="endereco"]').value = logadouro;
    document.querySelector('input[name="bairro"]').value = bairro;
    document.querySelector('input[name="cidade"]').value = localidade;
>>>>>>> b3f61100d41f7eecf1b2df06aba968a7739a5f34
}

