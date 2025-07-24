/**
 * Função principal que inicializa o cálculo do IMC
 * Configura os elementos do DOM e define os event listeners
 * Versão com destaque na tabela de IMC
 */
function calculoImc() {
   // Seleciona os elementos principais do DOM
   const form = document.querySelector(".form");
   const resultadoImc = document.querySelector(".resultadoImc");
   const alerta = document.querySelector(".alerta");

   /**
    * Função que realiza o cálculo do IMC quando o formulário é enviado
    * @param {Event} event - Evento de submit do formulário
    */
   function calcularImc(event) {
      event.preventDefault(); // Previne o envio do formulário
      // Obtém os elementos de input
      const peso = form.querySelector(".input-peso");
      const altura = form.querySelector(".input-altura");
      // Converte os valores para número
      const pesoDigitado = Number(peso.value);
      let alturaDigitada = Number(altura.value);

      // Converte altura de centímetros para metros se necessário (ex: 180 -> 1.80)
      if (alturaDigitada > 3) {
         alturaDigitada = alturaDigitada / 100;
      }

      // Valida os inputs antes de prosseguir
      if (!validarInput(pesoDigitado, alturaDigitada)) {
         return;
      }

      // Fórmula do IMC: peso / (altura * altura) - a altura deve estar em metros
      const imc = pesoDigitado / (alturaDigitada * alturaDigitada);

      // Limpar os campos após o cálculo
      peso.value = "";
      altura.value = "";

      // Remove destaques anteriores
      document
         .querySelectorAll(".imc p, .resultado p")
         .forEach((p) => {
            p.classList.remove("destacado");
         });

      // Função para destacar os valores correspondentes
      function destacarValores(imcIndex) {
         const imcItems = document.querySelectorAll(".imc p");
         const resultadoItems =
            document.querySelectorAll(".resultado p");
         if (imcItems[imcIndex] && resultadoItems[imcIndex]) {
            imcItems[imcIndex].classList.add("destacado");
            resultadoItems[imcIndex].classList.add("destacado");
         }
      }

      if (imc < 18.5) {
         resultadoImc.innerHTML = `Seu IMC é ${imc.toFixed(
            2
         )}. (Abaixo do peso)`;
         destacarValores(0);
      } else if (imc >= 18.5 && imc < 24.9) {
         resultadoImc.innerHTML = `Seu IMC é ${imc.toFixed(
            2
         )}. (Peso normal)`;
         destacarValores(1);
      } else if (imc >= 25 && imc < 29.9) {
         resultadoImc.innerHTML = `Seu IMC é ${imc.toFixed(
            2
         )}. (Sobrepeso)`;
         destacarValores(2);
      } else if (imc >= 30 && imc < 34.9) {
         resultadoImc.innerHTML = `Seu IMC é ${imc.toFixed(
            2
         )}. (Obesidade grau 1)`;
         destacarValores(3);
      } else if (imc >= 35 && imc < 39.9) {
         resultadoImc.innerHTML = `Seu IMC é ${imc.toFixed(
            2
         )}. (Obesidade grau 2)`;
         destacarValores(4);
      } else if (imc > 40) {
         resultadoImc.innerHTML = `Seu IMC é ${imc.toFixed(
            2
         )}. (Obesidade grau 3)`;
         destacarValores(5);
      }
   }

   /**
    * Valida os valores de peso e altura inseridos
    * @param {number} pesoDigitado - Peso inserido pelo usuário
    * @param {number} alturaDigitada - Altura inserida pelo usuário
    * @returns {boolean} - Retorna true se os valores são válidos, false caso contrário
    */
   function validarInput(pesoDigitado, alturaDigitada) {
      // Limpa as mensagens anteriores
      resultadoImc.innerHTML = "";
      alerta.innerHTML = "";

      // Verifica se ambos os campos estão vazios
      if (pesoDigitado === "" && alturaDigitada === "") {
         alerta.innerHTML = "Peso e Altura Inválidos";
         return false;
      }
      // Verifica se o peso é válido (não vazio, é um número e maior que zero)
      else if (
         pesoDigitado === "" ||
         isNaN(pesoDigitado) ||
         pesoDigitado <= 0
      ) {
         alerta.innerHTML = "Peso Inválido";
         return false;
      }
      // Verifica se a altura é válida (não vazia, é um número e maior que zero)
      else if (
         alturaDigitada === "" ||
         isNaN(alturaDigitada) ||
         alturaDigitada <= 0
      ) {
         alerta.innerHTML = "Altura Inválida";
         return false;
      }
      return true; // Retorna true se todas as validações passarem
   }

   form.addEventListener("submit", calcularImc);
}
calculoImc();
