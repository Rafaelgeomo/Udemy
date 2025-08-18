// Seleciona os elementos HTML usando os seletores de classe.
const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

// Esta função é simples e tem apenas uma responsabilidade: criar um elemento <li>.
function criaLi() {
   const li = document.createElement('li');
   return li;
}
// Limpa o campo de input e move o cursor de volta para ele.
// Isso facilita a digitação da próxima tarefa.
function limpaInput() {
   inputTarefa.value = '';
   inputTarefa.focus();
}

// Cria e anexa um botão "Apagar" a um item da lista (<li>) que é passado como argumento.
function criaBotaoApagar(li) {
   li.innerText += ' '; // Adiciona um espaço para separar o texto do botão.
   const botaoApagar = document.createElement('button'); // Cria o elemento <button>.
   botaoApagar.innerText = 'X'; // Define o texto do botão.
   botaoApagar.setAttribute('class', 'apagar'); // Adiciona a classe CSS 'apagar' para estilização.
   li.appendChild(botaoApagar); // Anexa o botão ao item da lista.
}

// Esta função principal orquestra a criação de uma nova tarefa.
function criaTarefa(textoInput) {
   const li = criaLi(); // Cria o elemento <li>.
   li.innerText = textoInput; // Adiciona o texto do input ao <li>.
   tarefas.appendChild(li); // Anexa o <li> na lista de tarefas (<ul>).
   limpaInput(); // Limpa o input do usuário.
   criaBotaoApagar(li); // Adiciona o botão "Apagar" na tarefa recém-criada.
   salvarTarefas(); // Salva as tarefas no armazenamento local do navegador.
}

// Adiciona um evento que detecta quando o botão de adicionar tarefa é clicado.
btnTarefa.addEventListener('click', function () {
   // Se o campo de input estiver vazio, a função para aqui (evita tarefas em branco).
   if (!inputTarefa.value) return;
   // Se houver texto, chama a função para criar a tarefa.
   criaTarefa(inputTarefa.value);
});

// Adiciona um evento que detecta quando a tecla "Enter" é pressionada no campo de input.
inputTarefa.addEventListener('keypress', function (e) {
   // 'e.key' é uma forma moderna de pegar o nome da tecla. 'Enter' é o nome da tecla Enter.
   if (e.key === 'Enter') {
      // Se o campo de input estiver vazio, a função para.
      if (!inputTarefa.value) return;
      // Se houver texto, chama a função para criar a tarefa.
      criaTarefa(inputTarefa.value);
   }
});

// Adiciona um único evento de clique no documento inteiro.
// Isso é mais eficiente do que adicionar um evento de clique em cada botão "Apagar".
document.addEventListener('click', function (e) {
   // 'e.target' é o elemento HTML exato que foi clicado.
   const el = e.target;

   // Se o elemento clicado tiver a classe 'apagar'...
   if (el.classList.contains('apagar')) {
      // Remove o elemento pai do botão (que é o <li> da tarefa).
      el.parentElement.remove();
      // Salva as tarefas novamente para atualizar o armazenamento.
      salvarTarefas();
   }
});

// Salva as tarefas no armazenamento local do navegador.
function salvarTarefas() {
   // Seleciona todos os itens da lista (<li>).
   const liTarefas = tarefas.querySelectorAll('li');
   const listaDeTarefas = [];

   // Itera sobre cada <li>.
   for (let tarefa of liTarefas) {
      let tarefaTexto = tarefa.innerText;
      // Remove o texto "Apagar" e os espaços extras.
      tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
      // Adiciona o texto da tarefa na lista.
      listaDeTarefas.push(tarefaTexto);
   }

   // Converte o array de strings para uma string no formato JSON.
   const tarefasJSON = JSON.stringify(listaDeTarefas);
   // Salva a string JSON no LocalStorage, com a chave 'tarefas'.
   localStorage.setItem('tarefas', tarefasJSON);
}


// Adiciona as tarefas salvas no LocalStorage de volta para a tela quando a página carrega.
function adicionaTarefasSalvas() {
   // Pega a string JSON do LocalStorage.
   const tarefas = localStorage.getItem('tarefas');
   // Converte a string JSON de volta para um array de objetos JavaScript.
   const listaDeTarefas = JSON.parse(tarefas);

   // Se houver tarefas salvas, itera sobre elas...
   if (listaDeTarefas) {
      // ...e chama a função criaTarefa() para cada uma.
      for (let tarefa of listaDeTarefas) {
         criaTarefa(tarefa);
      }
   }
}

// Executa a função para carregar as tarefas salvas assim que o script for executado.
adicionaTarefasSalvas();

























