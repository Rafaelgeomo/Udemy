// A função que tem a palavra Function tem arguments que sustenta todos os argumentos enviados.
// function funcao() {
//    let total = 0;
//    for (argumento of arguments) {
//       total += argumento;
//    }

//    console.log(total)
// }
// funcao(1, 2, 3, 4, 5, 6, 7);

// function funcao({ nome, sobrenome, idade }) {
//    console.log(nome, sobrenome, idade);
// }
// funcao({ nome: 'Rafael', sobrenome: 'Jeronymo', idade: 36 });

const conta = function (operador, acumulador, ...numeros) {
   for (let numero of numeros) {
      if (operador === '+') acumulador += numero;
      if (operador === '-') acumulador -= numero;
      if (operador === '/') acumulador /= numero;
      if (operador === '*') acumulador *= numero;
   }

   console.log(acumulador)
};
conta('+', 1, 20, 30, 40, 50);