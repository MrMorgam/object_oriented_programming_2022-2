class SituacaoFinanceira {
    valorCreditos: number = 0
    valorDebitos: number = 0

    saldo(): number {
        return this.valorCreditos - this.valorDebitos
    }
}

let situacaoFinanceira1 = new SituacaoFinanceira
situacaoFinanceira1.valorCreditos = 1200
situacaoFinanceira1.valorDebitos = 599

console.log(`Saldo: R$ ${situacaoFinanceira1.saldo().toFixed(2)}`)