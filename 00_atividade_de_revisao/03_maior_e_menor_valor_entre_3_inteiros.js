import prompt from 'prompt-sync'
const input = prompt()


function main() {
    const valor1 = Number(input('Digite um número inteiro: '))
    const valor2 = Number(input('Digite um número inteiro: '))
    const valor3 = Number(input('Digite um número inteiro: '))

    const menorValor = menor_valor_entre_3_num(valor1, valor2, valor3)
    const maiorValor = maior_valor_entre_3_num(valor1, valor2, valor3)

    console.log(`\nMaior valor: ${maiorValor}\nMenor valor: ${menorValor}`)
}


function menor_valor_entre_3_num(int1, int2, int3) {
    let menorValor = int1
    
    if (int2 < menorValor) {
        menorValor = int2
    } if (int3 < menorValor) {
        menorValor = int3
    }
    
    return menorValor
}


function maior_valor_entre_3_num(int1, int2, int3) {
    let maiorValor = int1

    if (int2 > maiorValor) {
        maiorValor = int2
    } if (int3 > maiorValor) {
        maiorValor = int3
    }

    return maiorValor
}


main()