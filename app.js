alert("Boas vindas ao jogo do número secreto!");
let numeroMaximo = 1000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let palpite;
let tentativas = 1;

while (palpite != numeroSecreto) {
  palpite = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
  if (palpite == numeroSecreto) {
    break;
  } else {
    if (palpite > numeroSecreto) {
      alert(`O número secreto é menor que ${palpite}`);
    } else {
      alert(`O número secreto é maior que ${palpite}`);
    }
    tentativas++;
  }
}
let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(
  `Parabéns, você acertou! Número Secreto: ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`
);
