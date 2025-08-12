const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Continue continua para a proxima iteração;
// Break sai do laço;

let i = 0;

do {
   let numero = numeros[i];

   if (numero === 2) {
      console.log('Pulei o numero 2');
      i++;
      continue;
   }

   console.log(numero);

   if (numero === 7) {
      console.log('Numero 7 encontrado, saindo...');
      i++;
      break;
   }

   i++;
} while (i < numeros.length);


// while (i < numeros.length) {
//    let numero = numeros[i];

//    if (numero === 2) {
//       console.log('Pulei o numero 2');
//       i++;
//       continue;
//    }

//    console.log(numero);

//    if (numero === 7) {
//       console.log('Numero 7 encontrado, saindo...');
//       i++;
//       break;
//    }

//    i++;
// }

// for (let i = 0; i < numeros.length; i++) FOR classico
// for (let i in numeros) FOR IN
//    let numero = numero[i];
// for (let numero of numeros) {  FOR OF

//    if (numero === 2) {
//       console.log('Pulei o numero 2');
//       continue;
//    }

//    console.log(numero);

//    if (numero === 7) {
//       console.log('Numero 7 encontrado, saindo...');
//       break;
//    }
// }