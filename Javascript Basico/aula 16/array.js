const alunos = ["Rafael", "Daniele", "Mustafah"];

alunos.push("Musta"); // Adiciona ao final da lista
alunos.unshift("Rafa"); //Adiciona ao inicio da lista
const removido = alunos.pop(); //remove o ultimo da lista e da pra colocar em uma variavel
const removido2 = alunos.shift(); //remove o primeiro da lista
// delete alunos[2]; // deletando o indice especifico, porem ele ficará vazio

console.log(alunos);
console.log(removido);
console.log(removido2);
