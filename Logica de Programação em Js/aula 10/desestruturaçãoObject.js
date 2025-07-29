const pessoa = {
   nome: 'Rafael',
   sobrenome: 'Jeronymo',
   idade: 35,
   endereco: {
      rua: 'Rua Amambai',
      numero: 447
   }
};

// Atribuição via desestruturação
// const { endereco: { rua, numero }, endereco } = pessoa;
const { nome, ...resto } = pessoa

console.log(resto);