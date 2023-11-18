

function calcular(){
	numero = document.getElementById('numero');
	soma_total = 0;

	if(numero.value > 0){
		divisiveis_texto = document.getElementById('divisiveis');
		divisiveis_texto.innerHTML = `Os numeros menores que ${numero.value} que são diviseis por 3 ou 5 são:<br/>`;

		resultado = document.getElementById('resultado');
		
		
		for(var i = 1; i < numero.value; i++){
			if(i%3 == 0 || i%5 == 0){
				soma_total += i;
				divisiveis_texto.innerHTML += ` ${i} /`;
			}
		}

		numero.value = "";
		resultado.innerHTML = `A soma deles é ${soma_total}`;
	}else{
		alert("Digite um número inteiro positivo.");
	}
}

setInterval(() => {
	resultado = document.getElementById('resultado');
	cores = ['blue','red','black','gray','pink','orange','green']
	resultado.style.color = cores[Math.floor(Math.random()*cores.length)];
}, 150)

