import prompt from 'prompt-sync'
const input = prompt()


function main() {
    const valorInicial = Number(input('Digite o valor (em R$): '))
    const taxaJuros = Number(input('Digite taxa de juros (% a.m.): '))
    
    let montantes = vetor_montantes_12_meses(valorInicial, taxaJuros)

    const montantesTexto = separar_elem_vetor_por_traco(montantes)

    console.log(`\nMontantes ao longo dos 12 meses: ${montantesTexto}`)
}


function vetor_montantes_12_meses(valorInicial, taxaJuros) {
    let capital = valorInicial
    let montantes = []

    for (let i = 0; i < 12; i++) {
        montantes[i] = (capital * (1 + (taxaJuros / 100))).toFixed(2)
        capital = montantes[i]
    }

    return montantes
}


function separar_elem_vetor_por_traco(vetor) {
    let texto = ''

    for (let i = 0; i < vetor.length; i++) {
        if (i !== (vetor.length - 1)) {
            texto += `${vetor[i]} - `
        } else {
            texto += `${vetor[i]}`
        }
    }

    return texto
}


main()