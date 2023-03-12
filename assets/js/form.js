const consultaCEP = async (userCEP) => {
	await fetch(`https://viacep.com.br/ws/${userCEP}/json/`)
	.then(resposta => {
		console.log(resposta)
	})

}


