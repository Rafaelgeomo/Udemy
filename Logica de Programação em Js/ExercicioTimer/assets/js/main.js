// Criar um timer, onde você clica no botão inicar ele começa
// clica no botão pausa ele para e muda para a cor vermelha
// se clicar no botão iniciar ele retorna onde parou e se clicar no botão zerar ele zera.

// Esta função recebe o número total de segundos e o converte para o formato de tempo (HH:MM:SS)
// Ela usa a classe 'Date' do JavaScript, que é uma forma simples e robusta de formatar tempo.
function criaHoraDosSegundos(segundos) {
   // Cria uma nova data, começando do 'marco zero' (1970).
   // O valor 'segundos' é multiplicado por 1000, pois 'Date' espera milissegundos.
   const data = new Date(segundos * 1000);

   // Formata a data para uma string de tempo localizada.
   // 'pt-BR' formata para o padrão brasileiro.
   // 'hour12: false' garante que o formato seja de 24 horas.
   // 'timeZone: 'UTC'' é crucial, pois impede que o fuso horário local altere o resultado.
   return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC'
   });
}

// Seleciona os elementos HTML usando os seletores de classe.
const relogio = document.querySelector('.relogio');

// Cria as variáveis que irão controlar o tempo e o intervalo do timer.
let segundos = 0; // Armazena o número total de segundos.
let timer; // Armazena a referência do 'setInterval' para que ele possa ser limpo depois.

// Esta função inicia a contagem do relógio.
function iniciaRelogio() {
   // 'setInterval' chama uma função a cada 1000 milissegundos (1 segundo).
   timer = setInterval(function () {
      segundos++; // Incrementa a variável de segundos.
      // Atualiza o conteúdo HTML do relógio com o tempo formatado.
      relogio.innerHTML = criaHoraDosSegundos(segundos);
   }, 1000);
}

// Adiciona um único 'listener' de clique ao documento inteiro.
// Isso é mais eficiente do que adicionar um 'listener' a cada botão.
document.addEventListener('click', function (e) {
   // A variável 'element' armazena o elemento HTML que foi clicado.
   const element = e.target;

   // Se o elemento clicado tiver a classe 'iniciar'...
   if (element.classList.contains('iniciar')) {
      relogio.classList.remove('pausado') // Remove a classe CSS que deixa o texto vermelho.
      clearInterval(timer); // Limpa qualquer timer anterior para evitar múltiplos cronômetros.
      iniciaRelogio(); // Chama a função para iniciar o cronômetro.
   }

   // Se o elemento clicado tiver a classe 'pausar'...
   if (element.classList.contains('pausar')) {
      clearInterval(timer); // Para o cronômetro, limpando o intervalo.
      relogio.classList.add('pausado') // Adiciona a classe CSS para deixar o texto vermelho.
   }

   // Se o elemento clicado tiver a classe 'zerar'...
   if (element.classList.contains('zerar')) {
      relogio.classList.remove('pausado') // Remove a classe de 'pausado'.
      clearInterval(timer); // Para o cronômetro.
      relogio.innerHTML = '00:00:00'; // Define o tempo de volta para '00:00:00'.
      segundos = 0; // Zera a variável de segundos para reiniciar a contagem.
   }
});


// Solução mais antiga para pegar os cliques dos 3 botões
// iniciar.addEventListener('click', function (e) {
//    relogio.classList.remove('pausado')
//    clearInterval(timer);
//    iniciaRelogio();
// });

// pausar.addEventListener('click', function (e) {
//    clearInterval(timer);
//    relogio.classList.add('pausado')
// });

// zerar.addEventListener('click', function (e) {
//    relogio.classList.remove('pausado')
//    clearInterval(timer);
//    relogio.innerHTML = '00:00:00';
//    segundos = 0;
// });




