// 1. Seleciona o primeiro elemento com a classe 'paragrafo'.
// Este será o container de todos os parágrafos que queremos modificar.
const paragrafos = document.querySelector('.paragrafo');
// 2. Seleciona todos os elementos 'p' que estão DENTRO do container 'paragrafo'.
// Isso nos dá uma lista (NodeList) de todos os parágrafos.
const ps = paragrafos.querySelectorAll('p');
// 3. Obtém o estilo de CSS COMPUTADO (finalmente aplicado) ao 'body' do documento.
const estilosBody = getComputedStyle(document.body);
// 4. Extrai a cor de fundo do objeto de estilos do 'body' para uma variável.
const backgroundColorBody = estilosBody.backgroundColor;

// 6. Inicia um loop para percorrer cada parágrafo na nossa lista 'ps'.
for (let p of ps) {
   p.style.backgroundColor = backgroundColorBody;
   p.style.color = '#fff'
}