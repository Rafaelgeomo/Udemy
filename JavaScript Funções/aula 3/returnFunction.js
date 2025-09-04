// Return -> retorna um valor e termina a função

// function soma(a, b){
//    return a+b;
// }

function criaMultiplicador(multiplicador) {
   return function (n) {
      return n * multiplicador;
   };
}

const duplica = criaMultiplicador(2); // o numero seria o multiplicador
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2)); // o numero colocado seria multiplicado pelo multiplicador
console.log(triplica(2));
console.log(quadriplica(2));