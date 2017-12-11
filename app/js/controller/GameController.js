class GameController{

	constructor(){
		this.$ = document.querySelector.bind(document);
		this._buttons = document.querySelectorAll('.botao-ataque');		
 		
 		this._viewLife1 = new View(this.$('#vida1'), 1);
 		this._viewLife2 = new View(this.$('#vida2'), 2);

 		this._ataque = new Ataque();
	}

	ataqueJogadorUm(){			
		this._ataque.jogadorUm(this._viewLife2, 1);				
	}

	ataqueJogadorDois(){
		this._ataque.jogadorDois(this._viewLife1, 2);			
	}

	reiniciar(){
		this._viewLife1.restart();
		this._viewLife2.restart();
		this._buttons.forEach(n => n.disabled = false);
	}
}