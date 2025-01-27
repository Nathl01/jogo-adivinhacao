alert("Boas vindas ao jogo do número secreto!");

const numeroMaximo = 1000;
const numeroSecreto = Math.floor(Math.random() * numeroMaximo) + 1;
console.log(numeroSecreto);

let palpite;
let tentativas = 0;

while (palpite !== numeroSecreto) {
  palpite = parseInt(prompt(`Escolha um número entre 1 e ${numeroMaximo}`));
  tentativas++;

  if (palpite === numeroSecreto) {
    break;
  } else if (palpite > numeroSecreto) {
    alert(`O número secreto é menor que ${palpite}`);
  } else {
    alert(`O número secreto é maior que ${palpite}`);
  }
}

const palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Parabéns, você acertou! Número Secreto: ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);
