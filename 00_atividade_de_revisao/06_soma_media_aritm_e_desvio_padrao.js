import prompt from 'prompt-sync'
const input = prompt()


function main() {
    let numeros = []

    let i = 0
    numeros[i] = Number(input('Digite um número: '))
    i++

    while (numeros[i-1] !== -1) {
        numeros[i] = Number(input('Digite um número: '))
        i++
    }

    numeros = deletar_ultimo_elem_vetor(numeros)

    const soma = soma_num(numeros)
    const mediaAritm = media_aritm_num(numeros)
    const desvioPadrao = desvio_padrao_num(numeros)


    console.log(`\nSoma: ${soma}\nMédia aritmética: ${mediaAritm}\nDesvio padrão: ${desvioPadrao}`)
}


function soma_num(numeros) {
    let soma = 0
    
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i]
    }

    return soma
}


function media_aritm_num(numeros) {
    let soma = 0
    
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i]
    }

    const mediaAritm = soma / numeros.length

    return mediaAritm
}


function desvio_padrao_num(numeros) {
    let soma = 0
    
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i]
    }

    const mediaAritm = soma / numeros.length

    let numeradorDP = 0

    for (let i = 0; i < numeros.length; i++) {
        numeradorDP += (numeros[i] - mediaAritm) ** 2
    }

    const desvioPadrao = Math.sqrt(numeradorDP / numeros.length) 

    return desvioPadrao
}


function deletar_ultimo_elem_vetor(numeros) {
    let vetorAux = []

    for (let i = 0; i < (numeros.length - 1); i++) {
        vetorAux[i] = numeros[i]
    }

    return vetorAux
}


main()