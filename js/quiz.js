
function verifica(){
	
	var cont = 0;
	var cartman = 0;
	var kyle = 0;
	var kenny = 0;
	var stan = 0;
	var primeira = document.getElementsByName("a");
	var segunda = document.getElementsByName("b");
	var terceira = document.getElementsByName("c");
	var quarta = document.getElementsByName("d");
	var quinta = document.getElementsByName("e");
	var erro = 0;
	
	for(var i = 0; i < primeira.length; i++){
		if(primeira[i].checked == true){	
			if(primeira[i].value == 1){
				kenny++;
				break;
			}	
			if(primeira[i].value == 2){
				kyle++;
				break;
			}	
			if(primeira[i].value == 3){
				stan++;
				break;
			}	
			if(primeira[i].value == 4){
				cartman++;
				break;
			}	
		}else{
			if(i == 3)erro++;
		}
	}

	for(var i = 0; i < segunda.length; i++){
		if(segunda[i].checked == true){	
			if(segunda[i].value == 1){
				kenny++;
				break;
			}	
			if(segunda[i].value == 2){
				kyle++;
				break;
			}	
			if(segunda[i].value == 3){
				stan++;
				break;
			}	
			if(segunda[i].value == 4){
				cartman++;
				break;
			}	
		}else{
			if(i == 3)erro++;
		}
	}
	
	for(var i = 0; i < terceira.length; i++){
		
		if(terceira[i].checked == true){	
			if(terceira[i].value == 1){
				kenny++;
				break;
			}	
			if(terceira[i].value == 2){
				kyle++;
				break;
			}	
			if(terceira[i].value == 3){
				stan++;
				break;
			}	
			if(terceira[i].value == 4){
				cartman++;
				break;
			}	
		}else{
			if(i == 3)erro++;
		}
	}
	
	for(var i = 0; i < quarta.length; i++){
		if(quarta[i].checked == true){	
			if(quarta[i].value == 1){
				kenny++;
				break;
			}	
			if(quarta[i].value == 2){
				kyle++;
				break;
			}	
			if(quarta[i].value == 3){
				stan++;
				break;
			}	
			if(quarta[i].value == 4){
				cartman++;
				break;
			}	
		}else{
			if(i == 3)erro++;
		}
	}
	
	for(var i = 0; i < quinta.length; i++){
		if(quinta[i].checked == true){	
			if(quinta[i].value == 1){
				kenny++;
				break;
			}	
			if(quinta[i].value == 2){
				kyle++;
				break;
			}	
			if(quinta[i].value == 3){
				stan++;
				break;
			}	
			if(quinta[i].value == 4){
				cartman++;
				break;
			}	
		}else{
			if(i == 3)erro++;
		}
	}
	
	
	if(erro > 0){
		
		alert("Você deve escolher uma opção em cada uma das perguntas.");
		alert(erro);
	}else{
	
		if(cartman > stan && cartman > kyle & cartman > kenny){
			var imagem = document.getElementById("imagem");
			var texto = document.getElementById("texto1");
			var texto2 = document.getElementById("texto2");
			texto.innerHTML = "O personagem mais parecido com você é: ";
			imagem.innerHTML = "<img src='images/loading.gif' alt='loading'>";
			setTimeout(function(){ imagem.innerHTML = "<a href='personagens.html#cartman'><img src='images/cartman.png' alt='cartman'></a>"; texto2.innerHTML = "Cartman<br><br><a href='quiz.html'><button>Refazer</button></a>"; }, 6000);;
		}else if(stan > cartman && stan > kenny && stan > kyle){
			var imagem = document.getElementById("imagem");
			var texto = document.getElementById("texto1");
			var texto2 = document.getElementById("texto2");
			texto.innerHTML = "O personagem mais parecido com você é: ";
			imagem.innerHTML = "<img src='images/loading.gif' alt='loading'></a>";
			setTimeout(function(){ imagem.innerHTML = "<a href='personagens.html#stan'><img src='images/stan.png' alt='stan'><a/>"; texto2.innerHTML = "Stan<br><br><a href='quiz.html'><button>Refazer</button></a>"; }, 6000);;
		}else if(kyle > cartman && kyle > kenny && kyle > stan){
			var imagem = document.getElementById("imagem");
			var texto = document.getElementById("texto1");
			var texto2 = document.getElementById("texto2");
			texto.innerHTML = "O personagem mais parecido com você é: ";
			imagem.innerHTML = "<img src='images/loading.gif' alt='loading'>";
			setTimeout(function(){ imagem.innerHTML = "<a href='personagens.html#kyle'><img src='images/kyle.png' alt='kyle'></a>"; texto2.innerHTML = "Kyle<br><br><a href='quiz.html'><button>Refazer</button></a>"; }, 6000);;
		}else if(kenny > cartman && kenny > stan && kenny > kyle){
			var imagem = document.getElementById("imagem");
			var texto = document.getElementById("texto1");
			var texto2 = document.getElementById("texto2");
			texto.innerHTML = "O personagem mais parecido com você é: ";
			imagem.innerHTML = "<img src='images/loading.gif' alt='loading'>";
			setTimeout(function(){ imagem.innerHTML = "<a href='personagens.html#keny'><img src='images/keny.png' alt='keny'></a>"; texto2.innerHTML = "Kenny<br><br><a href='quiz.html'><button>Refazer</button></a>"; }, 6000);;
		}else{
			var imagem = document.getElementById("imagem");
			var texto = document.getElementById("texto1");
			var texto2 = document.getElementById("texto2");
			texto.innerHTML = "O personagem mais parecido com você é: ";
			imagem.innerHTML = "<img src='images/loading.gif' alt='loading'>";
			setTimeout(function(){ imagem.innerHTML = "<a href='personagens.html#butters'><img src='images/butters.png' alt='butters'></a>"; texto2.innerHTML = "Butters<br><br><a href='quiz.html'><button>Refazer</button></a>"; }, 6000);;
		}
	}	
}	