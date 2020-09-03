/* Aula 02 - Atribuição de Variáveis */

// a LET é uma variável que pode ser alterada durante os blocos de código.
let nome = "Pedro";

// a CONST é uma variável que não muda após usa atribuição.
const sobrenome = "Henrique";
const idade = 27;

// utilizando a interpolação.
console.log(nome, sobrenome);
console.log(`Meu nome é ${nome} ${sobrenome} e tenho ${idade} anos.`);

// exemplo utilizando a declaração com LET (não é indicado trabalhar dessa forma,pois é uma prática ruim e difícil de debugar).
nome = nome + sobrenome;
console.log(nome);

