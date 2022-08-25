/* Aula 05 - Trabalhando com Repetições/Loops */

const listaDeDestinos = ['Brasília', 'Rio de Janeiro', 'São Paulo'];
const idadeComprador = 15;
const estaAcompanhada = false;
const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;
const destino = "Brasília";
let temPassagemComprada = false;
let contator = 0;
let destinoExiste = false;

// BLOCO UTILIZADO PARA ESTUDO DE REPETIÇÕES UTILIZANDO WHILE.
while(contator < 3){
    if (listaDeDestinos[contator] == destino){
        console.log("DESTINO EXISTENTE.");
        destinoExiste = true;
        break;
    }
    contator = contator + 1;
}

console.log("DESTINO EXISTE: ", destinoExiste);
