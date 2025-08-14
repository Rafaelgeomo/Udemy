function retornaHora(data) {
   if (data && !(data instanceof Date)) {
      throw new TypeError('Esperando instância de Date.');
   }

   if (!data) {
      data = new Date();
   }

   return data.toLocaleTimeString('pt-BR', {

   });
}

try {
   const data = new Date('01-01-1970 12:58:12')
   const hora = retornaHora();
   console.log(hora);
} catch (e) {

} finally {
   console.log('Tenha um bom dia.')
}




// try {
//    // É executada quando não há erros
//    console.log('Abri um arquivo');
//    console.log('Manipulei o arquivo e gerou erro');
//    console.log(a);
//    console.log('Fechei o arquivo');

// } catch (e) {
//    // É executada quando há erros
//    console.log('Tratando o erro');
// } finally {
//    // Sempre será
//    console.log('FINALLY: Eu sempre sou executado');
// }






// function soma(x, y) {
//    if (typeof x !== 'number' || typeof y !== 'number') {
//       throw new Error('x e y precisam ser números.');
//    }

//    return x + y;
// }

// try {
//    console.log(soma(1, 2));
//    console.log(soma('1', 2));
// } catch (error) {
//    // console.log(error);
//    console.log('Alguma coisa mais amigavel pro usuáro')
// }
