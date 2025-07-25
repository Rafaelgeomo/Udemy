// Seleciona o elemento HTML com a classe 'container'
const exibir = document.querySelector('.container');

// Cria um novo objeto de data com a data/hora atual
const data = new Date();

// Obtém o dia da semana (0-6, onde 0 é domingo)
const diaSemana = data.getDay();

// Obtém o mês (0-11, onde 0 é janeiro)
const mesAno = data.getMonth();

// Converte o número do mês para seu nome por extenso
const mesAnoTexto = getMesTexto(mesAno);

// Converte o número do dia da semana para seu nome por extenso
const diaSemanaTexto = getDiaSemanaTexto(diaSemana);

// Formata a data completa com hora
const dataBrasil = formataHora(data);

/**
 * Adiciona zero à esquerda para números menores que 10
 * @param {number} num - Número a ser formatado
 * @returns {string} Número formatado com zero à esquerda se necessário
 */
function zeroAEsquerda(num) {
   return num >= 10 ? num : `0${num}`;
}

/**
 * Formata a data e hora no padrão brasileiro
 * @param {Date} data - Objeto Date para formatar
 * @returns {string} Data formatada (ex: "sexta-feira, 25 de julho de 2025 10:30")
 */
function formataHora(data) {
   const hora = zeroAEsquerda(data.getHours());
   const minuto = zeroAEsquerda(data.getMinutes());
   return `${diaSemanaTexto}, ${data.getDate()} de ${mesAnoTexto} de ${data.getFullYear()} ${hora}:${minuto}`;
}

/**
 * Converte o número do dia da semana para texto
 * @param {number} diaSemana - Número do dia (0-6)
 * @returns {string} Nome do dia da semana por extenso
 */
function getDiaSemanaTexto(diaSemana) {
   const diasSemana = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];
   return diasSemana[diaSemana];
}

/**
 * Converte o número do mês para texto
 * @param {number} mesAno - Número do mês (0-11)
 * @returns {string} Nome do mês por extenso
 */
function getMesTexto(mesAno) {
   const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
   return meses[mesAno];
}

// Insere a data formatada no elemento HTML
exibir.innerHTML = dataBrasil;




