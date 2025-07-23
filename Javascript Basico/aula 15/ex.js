const numero = Number(prompt("Digite um numero:")); //convertendo o numero digitado que é uma string em numero
const numeroTitulo = document.getElementById("numero-titulo");
const texto = document.getElementById("texto");

numeroTitulo.innerHTML = numero;

texto.innerHTML += `<p>A raiz quadrada do seu número é: <b>${
   numero ** 0.5
}</b></p>`;
texto.innerHTML += `<p>${numero} é inteiro: <b>${Number.isInteger(
   numero
)}</b></p>`;
texto.innerHTML += `<p>É NaN: <b>${Number.isNaN(numero)}</b></p>`;
texto.innerHTML += `<p>Arrendondando para baixo: <b>${Math.floor(
   numero
)}</b></p>`;
texto.innerHTML += `<p>Arrendondando para cima: <b>${Math.ceil(
   numero
)}</b></p>`;
texto.innerHTML += `<p>Com duas casas decimais: <b>${numero.toFixed(
   2
)}</b></p>`;
