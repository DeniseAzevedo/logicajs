alert('Boas vindas ao jogo do mundo secreto!');

const maximo = 50;
let numeroSecreto = parseInt(Math.random() * maximo + 1);
console.log (numeroSecreto);
let chute;
let tentativas = 1;

while(chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${maximo}`);
    if(chute == numeroSecreto){
        break;
    } else {
        if(chute > numeroSecreto && chute <= maximo){
            alert(`Você errou! Número secreto é menor do que ${chute}`);
        } else if(chute < numeroSecreto && chute > 0){
            alert(`Você errou! Númreo secreto é maior do que ${chute}`); 
        } else alert(`ATENÇÃO! Número está entre 1 e ${maximo}.`)
    }
    tentativas ++;
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert (`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

// if(tentativas > 1){
//     alert (`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
// } else {
//     alert (`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);

// }

