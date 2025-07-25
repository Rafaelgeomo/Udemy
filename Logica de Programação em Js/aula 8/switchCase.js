/**
 * Converte o número do dia da semana (0-6) para o nome do dia em português
 * @param {number} diaSemana - Número do dia da semana (0 para Domingo, 6 para Sábado)
 * @returns {string} - Nome do dia da semana em português
 */
function getDiaSemanaTexto(diaSemana) {
   let diaSemanaTexto;

   // Estrutura switch para converter o número do dia em texto
   switch (diaSemana) {
      case 0:
         diaSemanaTexto = 'Domingo';
         return diaSemanaTexto;
      case 1:
         diaSemanaTexto = 'Segunda';
         return diaSemanaTexto;
      case 2:
         diaSemanaTexto = 'Terça';
         return diaSemanaTexto;
      case 3:
         diaSemanaTexto = 'Quarta';
         return diaSemanaTexto;
      case 4:
         diaSemanaTexto = 'Quinta';
         return diaSemanaTexto;
      case 5:
         diaSemanaTexto = 'Sexta';
         return diaSemanaTexto;
      case 6:
         diaSemanaTexto = 'Sábado';
         return diaSemanaTexto;
      default:
         // Caso seja passado um número inválido, retorna string vazia
         diaSemanaTexto = '';
         return diaSemanaTexto;
   }

}

// Cria um objeto Date com uma data específica (21 de abril de 1987)
const data = new Date('1987-04-21 00:00:00');

// Obtém o dia da semana (0-6) da data criada
const diaSemana = data.getDay();
// diaSemana = 7; // Exemplo comentado de um valor inválido

// Converte o número do dia da semana para texto usando a função
const diaSemanaTexto = getDiaSemanaTexto(diaSemana);

// Versão anterior do código usando if/else (mantida como referência)
// Esta implementação foi substituída pela versão mais limpa usando switch
// if (diaSemana === 0) {
//    diaSemanaTexto = 'Domingo';
// } else if (diaSemana === 1) {
//    diaSemanaTexto = 'Segunda';
// } else if (diaSemana === 2) {
//    diaSemanaTexto = 'Terça';
// } else if (diaSemana === 3) {
//    diaSemanaTexto = 'Quarta';
// } else if (diaSemana === 4) {
//    diaSemanaTexto = 'Quinta';
// } else if (diaSemana === 5) {
//    diaSemanaTexto = 'Sexta';
// } else if (diaSemana === 6) {
//    diaSemanaTexto = 'Sábado';
// } else {
//    diaSemanaTexto = '';
// }

// Exibe o número do dia da semana e o nome correspondente
console.log(diaSemana, diaSemanaTexto);