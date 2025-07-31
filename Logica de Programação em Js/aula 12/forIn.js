// For in -> lê os indices ou chaves do objeto
const pessoa = {
   nome: 'Rafael',
   sobrenome: 'Jeronymo',
   idade: 35
};

for (let i in pessoa) {
   console.log(i, pessoa[i]);
}



// for (let i in frutas) {
//    console.log(i);
// }