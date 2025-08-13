// Escreva uma função que recebe um numero e retorne o seguinte:
// Numero é divisivel por 3 = Fizz
// Número é divisivel por 5 = Buzz
// Número é divisivel por 3 e 5 = FizzBuzz
// Número NÃO é divisivel por 3 e 5 = Retorna o próprio número
// Checar se o número realmente um número
// Use a função com números de 0 a 100

// SOLUÇÃO PROFESSOR
function fizzBuzz(numero) {
   if (typeof numero !== 'number') return numero;
   if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
   if (numero % 3 === 0) return 'Fizz';
   if (numero % 5 === 0) return 'Buzz';
   return numero;
};

// for (let i = 0; i <= 100; i++) {
//    console.log(i, fizzBuzz(i))
// };

//MINHA SOLUÇÃO
// function retornaValor(num) {
//    if (typeof num !== 'number' || Number.isNaN(num)) {
//       return num;
//    } else if (num % 3 === 0 && num % 5 === 0) {
//       return 'FizzBuzz';
//    } else if (num % 3 === 0) {
//       return 'Fizz';
//    } else if (num % 5 === 0) {
//       return 'Buzz';
//    }
//    return num;
// };

// for (let i = 0; i <= 100; i++) {
//    console.log(i, retornaValor(i))
// };