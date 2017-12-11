class Ataque{

	constructor(){
		this.$ = document.querySelector.bind(document);
		this._buttons = document.querySelectorAll('.botao-ataque');
		this.view = new View();
	}

	jogadorUm(view, posicao){
		let life = parseInt(this.$('#vida2').textContent, 10);
		life = life - 20;
		document.querySelector("#progress-two")
		.setAttribute('value', life);
		this.vencedor(life, posicao);
		view.update(life);
	}

	jogadorDois(view, posicao){
		let life = parseInt(this.$('#vida1').textContent, 10);
		life = life - 20;
		document.querySelector("#progress-one")
		.setAttribute('value', life);
		this.vencedor(life, posicao);
		view.update(life);	
	}

	vencedor(life, posicao){
		if(life==0){
			this.view.updateMensagem(posicao);
			document.querySelector("#mensagemView")
			.style.visibility = "visible";
			this._buttons.forEach(n=> n.disabled = true);
		}
	}
}