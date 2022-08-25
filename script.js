let time;
      let elemento;
      let id;
      function contar() {
        time = Number(prompt('Quantos segundos?'));

        elemento = document.querySelector('.contador');
        elemento.innerHTML = time;

        id = setInterval(diminuir1Segundo, 1000);

      }

      function diminuir1Segundo() {
        time --;
        if (time === 0) {
          alert('Esta na hora da Janta!');
          clearInterval(id);
        }

        elemento.innerHTML = time;

      }

      // Algoritmo para codar o contador.
      // 1-  pergunta quantos segundos ele quer contar e armazena numa variável do tipo Number
      // 2- executa a função diminuir1Segundo com setInterval(diminuir1Segundo, 1000) dentro da função contar

      // 3- função diminuir1Segundo pega o valor de time, diminui 1, altera o valor dentro da div, Quando bater 0
      // ele para e exibe um alert


      //Faça com que o botão "Iniciar contador", **pergunte via `prompt`
      // usuário quantos segundos ele quer contar** e então **inicie
      // uma contagem regressiva na `div` contadora** logo abaixo,
      // atualizando-a a cada segundo.

      // Ao final, dispare um único `alert` com a mensagem
      //  "Hora da janta!".

      // Seu código aqui