/* Aula 05 - Trabalhando com Repetições/Loops */

const listaDeDestinos = ['Brasília', 'Rio de Janeiro', 'São Paulo'];
const idadeComprador = 15;
const estaAcompanhada = false;
const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;
const destino = "Brasília";
let temPassagemComprada = false;
let contator = 0;
let destinoExiste = false;
let i = 0;

// BLOCO UTILIZADO PARA ESTUDO DE REPETIÇÕES UTILIZANDO WHILE.
for(i; i < 3; i++){
    if (listaDeDestinos[contator] == destino){
        console.log("DESTINO EXISTENTE.");
        destinoExiste = true;
    }
}

console.log("DESTINO EXISTE: ", destinoExiste);
