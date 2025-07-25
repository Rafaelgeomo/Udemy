// (condição) ? 'valor para verdadeiro' : 'valor para falso'; :
const pontuacaoUsuario = 500;
const nivelUsuario = pontuacaoUsuario >= 1000 ? "Usário Vip" : "Usuário normal";

const corUsuario = null;
const corPadrao = corUsuario || 'Preto';

console.log(nivelUsuario, corPadrao);



// if (pontuacaoUsuario >= 1000) {
//    console.log('Usuário VIP');
// } else {
//    console.log('Usuário normal');
// }
