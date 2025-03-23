function verificar() {
	let senha = String(prompt('Insira a senha:'))

	if(senha == "santoandrecidadenumeroum")
	{
		window.alert("Acertaste a senha. Agora recompenso-te com o acesso exclusivo à página secreta.");
		window.location.href = "santoandre.xhtml";
	}
	else if(senha == "" || senha === null)
	{
		window.alert("Não inseriste senha alguma.");
	}
	else
	{
		window.alert("Não inseriste a senha correta.");
	}
}