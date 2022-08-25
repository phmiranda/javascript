class Cliente {
    nome;
    documento;
    agenciaBancaria;
    contaCorrente;
    saldoTotal;
}

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.documento = 11122233399;
cliente1.agenciaBancaria = 1001;
cliente1.contaCorrente = 77888;
cliente1.saldoTotal = 0

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.documento = 44455566699;
cliente2.agenciaBancaria = 1002;
cliente2.contaCorrente = 77889;
cliente2.saldoTotal = 0

console.log(cliente1, cliente2);
