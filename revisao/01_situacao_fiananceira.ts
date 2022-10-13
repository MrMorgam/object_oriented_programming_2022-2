class SituacaoFinanceira {
    valorCreditos: number;
    valorDebitos: number;

    constructor(credito: number, debito: number) {
        this.valorCreditos = credito;
        this.valorDebitos = debito;
    }

    saldo(): number {
        return this.valorCreditos - this.valorDebitos;
    }
}


function main(): void {
    let situacaoFinanceira1: SituacaoFinanceira = new SituacaoFinanceira(100, 150);
    let situacaoFinanceira2: SituacaoFinanceira = new SituacaoFinanceira(150, 100);
    let situacaoFinanceira3: SituacaoFinanceira = new SituacaoFinanceira(100, 100);

    console.log(situacaoFinanceira1.saldo());
    console.log(situacaoFinanceira2.saldo());
    console.log(situacaoFinanceira3.saldo());
}


main();