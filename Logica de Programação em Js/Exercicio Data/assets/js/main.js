const exibir = document.querySelector('.container');
const data = new Date();
const diaSemana = data.getDay();
const mesAno = data.getMonth();
const mesAnoTexto = getMesTexto(mesAno);
const diaSemanaTexto = getDiaSemanaTexto(diaSemana);
const dataBrasil = formataData(data);

function zeroAEsquerda(num) {
   return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
   const dia = zeroAEsquerda(data.getDate()); // Obtém e formata o dia   
   const ano = zeroAEsquerda(data.getFullYear()); // Obtém e formata o ano
   const hora = zeroAEsquerda(data.getHours()); // Obtém e formata a hora
   const minuto = zeroAEsquerda(data.getMinutes()); // Obtém e formata os minutos 

   return `${diaSemanaTexto}, ${dia} de ${mesAnoTexto} de ${ano} ${hora}:${minuto}`;
}

function getDiaSemanaTexto(diaSemana) {
   let diaSemanaTexto;

   // Estrutura switch para converter o número do dia em texto
   switch (diaSemana) {
      case 0:
         diaSemanaTexto = 'Domingo';
         return diaSemanaTexto;
      case 1:
         diaSemanaTexto = 'Segunda-feira';
         return diaSemanaTexto;
      case 2:
         diaSemanaTexto = 'Terça-feira';
         return diaSemanaTexto;
      case 3:
         diaSemanaTexto = 'Quarta-feira';
         return diaSemanaTexto;
      case 4:
         diaSemanaTexto = 'Quinta-feira';
         return diaSemanaTexto;
      case 5:
         diaSemanaTexto = 'Sexta-feira';
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

function getMesTexto(mesAno) {
   let mesAnoTexto;

   // Estrutura switch para converter o número do dia em texto
   switch (mesAno) {
      case 0:
         mesAnoTexto = 'Janeiro';
         return mesAnoTexto;
      case 1:
         mesAnoTexto = 'Fevereiro';
         return mesAnoTexto;
      case 2:
         mesAnoTexto = 'Março';
         return mesAnoTexto;
      case 3:
         mesAnoTexto = 'Abril';
         return mesAnoTexto;
      case 4:
         mesAnoTexto = 'Maio';
         return mesAnoTexto;
      case 5:
         mesAnoTexto = 'Junho';
         return mesAnoTexto;
      case 6:
         mesAnoTexto = 'Julho';
         return mesAnoTexto;
      case 7:
         mesAnoTexto = 'Agosto';
         return mesAnoTexto;
      case 8:
         mesAnoTexto = 'Setembro';
         return mesAnoTexto;
      case 9:
         mesAnoTexto = 'Outubro';
         return mesAnoTexto;
      case 10:
         mesAnoTexto = 'Novembro';
         return mesAnoTexto;
      case 11:
         mesAnoTexto = 'Dezembro';
         return mesAnoTexto;
      default:
         // Caso seja passado um número inválido, retorna string vazia
         mesAnoTexto = '';
         return mesAnoTexto;
   }
}


exibir.innerHTML = dataBrasil;




