/*
Entre 0 e 11 - Bom dia!
Entre 12 e 17 - Boa tarde!
Entre 18 e 23 - Boa noite!
*/

// If pode ser usado sozinho
// Sempre que utilizo a palavra else, preciso de um if antes
// else if é a mesma coisa que else + if e posso ter quantos eu quiser
// O último else é opcional, mas se existir, não pode ter condição
// Podemos usar condições sem else if, utilizando apenas if e else

const hora = 24;

if (hora >= 0 && hora <= 11) {
   console.log("Bom dia!");
} else if (hora >= 12 && hora <= 17) {
   console.log("Boa tarde!");
} else if (hora >= 18 && hora <= 23) {
   console.log("Boa noite!");
} else {
   console.log("Hora inválida!");
}
