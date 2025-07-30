const container = document.querySelector('.container');
const elementos = [
   { tag: 'p', texto: 'Frase 1' },
   { tag: 'div', texto: 'Frase 2' },
   { tag: 'footer', texto: 'Frase 3' },
   { tag: 'section', texto: 'Frase 4' },
];



for (item of elementos) {
   const tag = item.tag;
   const texto = item.texto;
   // cria elemento dinamicamente
   const novoElemento = document.createElement(tag);
   // adiciona texto dinamicamente
   novoElemento.textContent = texto;
   //anexa o novo elemento ao container
   container.appendChild(novoElemento); //container elemento PAI e novoElemento elemento FILHO
}














