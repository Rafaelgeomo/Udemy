// ... rest, ... spread
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const [primeiroNumero, segundoNumero, ...resto] = numeros;
// const [um, , tres, , cinco, , sete] = numeros;
//  indices          0         1          2
//  indices       0  1  2    0  1  2    0  1  2
const numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const [lista1, lista2, lista3] = numeros;

console.log(lista2[1]);



