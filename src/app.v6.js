/* Aula 03 - Trabalhando com Listas */
// const salvador = "Salvador";
// const saoPaulo = "São Paulo";
// const rioDeJaneiro = "Rio de Janeiro";

const listaDeDestinos = [
    'Salvador',
    'São Paulo',
    'Rio de Janeiro'
];

// adiciona um novo item ao array dinamicamente e arrays sempre começam por 0 (zero).
listaDeDestinos.push('Curitiba');
listaDeDestinos.splice(1,1);

// imprime as variáveis.
// console.log(`Trabalhando com listas`);
// console.log('Destinos possíveis:');
// console.log(salvador,saoPaulo,rioDeJaneiro);
console.info(listaDeDestinos);
console.info(listaDeDestinos[1],listaDeDestinos[0]);

