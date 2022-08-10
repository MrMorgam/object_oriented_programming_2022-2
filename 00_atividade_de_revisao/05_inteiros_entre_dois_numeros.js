import prompt from 'prompt-sync'
const input = prompt()


function main() {
    const valor1 = Number(input('Digite um número: '))
    const valor2 = Number(input('Digite um número: '))

    const menorValor = menor_valor_entre_2_num(valor1, valor2)
    const maiorValor = maior_valor_entre_2_num(valor1, valor2)

    const intervaloInt = int_em_intervalo(menorValor, maiorValor)

    console.log(`\nIntervalo de números: (${intervaloInt})`)
}


function menor_valor_entre_2_num(valor1, valor2) {
    let menorValor = valor1

    if (valor2 < menorValor) {
        menorValor = valor2
    }

    return menorValor
}


function maior_valor_entre_2_num(valor1, valor2) {
    let maiorValor = valor1

    if (valor2 > maiorValor) {
        maiorValor = valor2
    }

    return maiorValor
}

function int_em_intervalo(menorValor, maiorValor) {
    const parteIntMenorValor = menorValor - (menorValor % 1)
    const parteIntMaiorValor = maiorValor - (maiorValor % 1)

    let intEmIntervalo = []

    let j = 0

    for (let i = parteIntMenorValor + 1; i < parteIntMaiorValor; i++) {
        intEmIntervalo[j] = i
        j++
    }

    return intEmIntervalo
}


main()