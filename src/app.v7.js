/* Aula 04 - Trabalhando com Condicionais */

const listaDeDestinos = ['Brasília', 'Rio de Janeiro', 'São Paulo'];
const idadeComprador = 18;
const estaAcompanhada = false;
const temPassagemComprada = true;

// bloco de código para tratamento condicional.
// if (idadeComprador >= 18){
//     console.log("Comprador é maior de idade.");
//     listaDeDestinos.splice(1,1);
// } else if (estaAcompanhada){
//     // verificação encadeada.
//         console.log("Comprador está acompanhado");
//         listaDeDestinos.splice(1,1);
//     } else {
//         // bloco de código caso haja algum retorno FALSE
//         console.log("Não é maior de idade e não posso vender");
// }

// mostra a lista de destinos
console.info(listaDeDestinos);

// bloco utilizando comparação na mesma verificação.
if (idadeComprador >= 18 || estaAcompanhada === true){
    console.log("O CLIENTE PRECISA SER MAIOR DE IDADE OU ESTÁ ACOMPANHADA: TENHA UMA BOA VIAGEM.");
    listaDeDestinos.splice(1,1);
} else {
    // bloco de código caso haja algum retorno FALSE
    console.log("O CLIENTE NÃO É MAIOR DE IDADE E NÃO É POSSÍVEL VENDER UMA PASSAGEM.");
}

if (idadeComprador >= 18 && temPassagemComprada){
    console.log("O CLIENTE É MAIOR DE IDADE E A COMPRA DA SUA PASSAGEM FOI CONFIRMADA.");
}else {
    console.log("O CLIENTE NÃO PODE EMBARCAR");
}

console.info(listaDeDestinos);

// mostra o resultado booleano dos condicionais.
// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador == 18);
