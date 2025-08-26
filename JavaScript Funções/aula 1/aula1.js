// Declaração de Função (Function hoisting)
function falaOi() {
   console.log('Oie');
}
falaOi();

// First-class Objects (Objeto de primeira classe)
// Function expression
const souUmDado = function () {
   console.log('Sou um dado.')
};

function executaFuncao(funcao) { //aqui foi passado como parado a função souUmDado
   console.log('Vou executar a sua função abaixo:')
   funcao();
}
executaFuncao(souUmDado) // aqui a function executaFuncao, executou a souUmDado

// Arrow function
const funcaoArrow = () => {
   console.log('Sou uma arrow function');
};
funcaoArrow();

// Dentro de um objeto
const obj = {
   falar() {
      console.log('Estou falando...')
   }
};
obj.falar();