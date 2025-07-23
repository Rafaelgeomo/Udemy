// function criaPessoa(nome, sobrenome, idade) {
//    return { nome, sobrenome, idade };
// }

// const pessoa1 = criaPessoa("Rafael", "Jeronymo", 35);
// const pessoa2 = criaPessoa("Daniele", "Dobrovolskni", 36);
// const pessoa3 = criaPessoa("Cleusa", "Viana", 73);
// const pessoa4 = criaPessoa("Anderson", "Viana", 44);
// const pessoa5 = criaPessoa("Sonia", "Lopes", 65);

// console.log(pessoa1.nome, pessoa2.idade, pessoa3.sobrenome);

const pessoa1 = {
   nome: "Luiz",
   sobrenome: "Miranda",
   idade: 25,

   fala() {
      console.log(`A minha idade atual é ${this.idade}`);
   },

   incrementeIdade() {
      this.idade++;
   },
};

pessoa1.fala();
pessoa1.incrementeIdade();
pessoa1.fala();
pessoa1.incrementeIdade();
pessoa1.fala();
pessoa1.incrementeIdade();
pessoa1.fala();
pessoa1.incrementeIdade();
pessoa1.fala();
