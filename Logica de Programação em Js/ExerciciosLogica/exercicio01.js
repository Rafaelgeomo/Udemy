// Escreva uma função que receba 2 numeros e retorne o maior deles

// SOLUÇÃO DO PROFESSOR
function max(x, y) {
   return x > y ? x : y; // isso é o mesmo do que está embaixo.
   // if (x > y) return x;
   // return y; 
}

// arrow function 
const max2 = (x, y) => x > y ? x : y;

console.log(max2(10, 20));

//MINHA SOLUÇÃO
// const num1 = (Math.random() * 30 + 1).toFixed(0);
// const num2 = (Math.random() * 30 + 1).toFixed(0);


// function retornaValor() {
//    if (num1 > num2) {
//       console.log(`O numero ${num1} é maior`)
//    } else {
//       console.log(`O numero ${num2} é maior`)
//    }
// }

// retornaValor();