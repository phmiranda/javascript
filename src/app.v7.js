/* Aula 04 - Trabalhando com Condicionais */

const listaDeDestinos = ['Brasília', 'Rio de Janeiro', 'São Paulo'];
const idadeComprador = 15;
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

// bloco utilizando comparação na mesma verificação.
if (idadeComprador >= 18 || estaAcompanhada == true){
    console.log("Comprador é maior de idade.");
    listaDeDestinos.splice(1,1);
} else {
    // bloco de código caso haja algum retorno FALSE
    console.log("Não é maior de idade e não posso vender");
}

if (idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa Viagem");
}else {
    console.log("Você não pode embarcar");
}

console.info(listaDeDestinos);

// mostra o resultado booleano dos condicionais.
// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador == 18);
