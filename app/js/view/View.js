class View{

	constructor(elemento, posicao){
		this._elemento = elemento;
		this._posicao = posicao;

		let $ = document.querySelector.bind(document);

		this._body = $('body');
		this._mensagemElement = $('#mensagemView');
	}

	template(model){
		return `<span id="vida${this._posicao}">${model}</span>`;
	}

	templateMensagem(model){
		return `<p id="mensagem"><strong>Jogador ${model}</strong> foi o VENCEDOR. Clique em <strong>REINICIAR</strong> para nova luta.</p>`;
	}

	update(model){
		this._elemento.innerHTML = this.template(model);
		this.efeitoAtaque();		
	}

	updateMensagem(model){
		this._mensagemElement.innerHTML = this.templateMensagem(model);
	}

	restart(){
		this._elemento.innerHTML = this.template("100");
		

		document.querySelector("#progress-two")
		.setAttribute('value', '100');
		document.querySelector("#progress-one")
		.setAttribute('value', '100');

		document.querySelector("#mensagemView")
		.style.visibility = "hidden";

		this.efeitoReiniciar();
	}

	efeitoAtaque(){
		this._body.classList.add("ataque");
		setTimeout(()=> {this._body.classList.remove("ataque")}, 500);
	}

	efeitoReiniciar(){
		this._body.classList.add("reiniciar");
		setTimeout(()=> {this._body.classList.remove("reiniciar")}, 500)
	}
}