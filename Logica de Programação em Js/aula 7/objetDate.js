// Diferentes formas de criar um objeto Date
//const data = new Date(2025, 6, 25, 13, 37); // Criando data específica: ano, mês (0-11), dia, hora, minuto
// console.log(Date.now()); // Retorna o timestamp atual (milissegundos desde 01/01/1970)
//const data = new Date('2025-08-15 13:30:25'); // Criando data a partir de string (formato mais comum)
// const data = new Date(1753462376058); // Criando data a partir de timestamp

// Métodos para obter componentes individuais da data
// console.log('Dia', data.getDate()); // Obtém o dia do mês (1-31)
// console.log('Mês', data.getMonth() + 1); // Obtém o mês (0-11, por isso +1)
// console.log('Ano', data.getFullYear()); // Obtém o ano com 4 dígitos
// console.log('Hora', data.getHours()); // Obtém a hora (0-23)
// console.log('Minuto', data.getMinutes()); // Obtém os minutos (0-59)
// console.log('Segundos', data.getSeconds()); // Obtém os segundos (0-59)
// console.log('MS', data.getMilliseconds()); // Obtém os milissegundos (0-999)
// console.log('Dia Semana', data.getDay()); // Obtém o dia da semana (0 = Domingo, 6 = Sábado)
// console.log(data.toString()); // Converte a data para string

/**
 * Função auxiliar que adiciona zero à esquerda para números menores que 10
 * @param {number} num - Número a ser formatado
 * @returns {string|number} - Retorna o número com zero à esquerda se for menor que 10
 */
function zeroAEsquerda(num) {
   return num >= 10 ? num : `0${num}`;
}

/**
 * Função que formata uma data no padrão brasileiro (dd/mm/aaaa hh:mm:ss)
 * @param {Date} data - Objeto Date a ser formatado
 * @returns {string} - Data formatada no padrão brasileiro
 */
function formataData(data) {
   const dia = zeroAEsquerda(data.getDate()); // Obtém e formata o dia
   const mes = zeroAEsquerda(data.getMonth() + 1); // Obtém e formata o mês
   const ano = zeroAEsquerda(data.getFullYear()); // Obtém e formata o ano
   const hora = zeroAEsquerda(data.getHours()); // Obtém e formata a hora
   const minuto = zeroAEsquerda(data.getMinutes()); // Obtém e formata os minutos
   const segundos = zeroAEsquerda(data.getSeconds()); // Obtém e formata os segundos

   // Retorna a data formatada usando template string
   return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundos}`;
}

// Cria um objeto Date com a data e hora atual
const data = new Date();
// Formata a data atual no padrão brasileiro
const dataBrasil = formataData(data);
// Exibe a data formatada no console
console.log(dataBrasil);