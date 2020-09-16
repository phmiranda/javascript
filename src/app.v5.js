/* Aula 02 - Atribuição de Variáveis */

// a CONST é uma variável que não muda após usa atribuição.
// const nome = "Pedro";
// const sobrenome = "Henrique";
// const nomeCompleto;
// const idade = 27;
// const contador = 0;

// a LET é uma variável que pode ser alterada durante os blocos de código.
let nome = "Pedro";
let sobrenome = "Henrique";
let idade = 27;
let contador = 0;

// exemplo utilizando a declaração com LET (não é indicado trabalhar dessa forma,pois é uma prática ruim e difícil de debugar).
// nomeCompleto = nome + sobrenome;

// atribui novos valores as variáveis.
nomeCompleto = nome + sobrenome;
contador = contador + 1;
idade = idade + 1;

// utilizando a interpolação e declarando o valor das variáveis usando CONST.
console.log(nome, sobrenome);
console.log(`Meu nome é ${nome} ${sobrenome} e tenho ${idade} anos.`);

// novas exibições
console.log(nomeCompleto);
console.log(contador);
console.log(idade);
