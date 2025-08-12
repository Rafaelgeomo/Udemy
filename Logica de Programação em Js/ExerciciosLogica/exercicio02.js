// Escreva uma função chamada ePaisagem que recebe dois
// argumentos, largura e altura de uma imagem (number).
// Retorne true se a imagem estiver no modo paisagem.



// DUAS FORMAS DE SOLUÇÃO.
const ePaisagem2 = (largura, altura) => largura > altura ? true : false;

function ePaisagem(largura, altura) {
   if (largura > altura)
      return true;
   return false;
}

console.log(ePaisagem2(30, 10));