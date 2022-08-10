import prompt from 'prompt-sync'
const input = prompt()


function main() {
    let numeros = []

    for (let i = 0; i < 5; i++) {
        numeros[i] = Number(input('Digite um número inteiro: '))
    }

    const numerosOrdCresc = vetor_ordem_cresc(numeros)
    const numerosOrdDecresc = inv_ordem_vetor(numerosOrdCresc)


    console.log(`\nOrdem crescente: (${numerosOrdCresc})\nOrdem decrescente: (${numerosOrdDecresc})`)
}


function vetor_ordem_cresc(vetor) {
    let aux = 0

    for (let i = 0; i < vetor.length; i++) { 
        for (let j = 0; j < (vetor.length - i - 1); j++) { 
            if(vetor[j] > vetor[j+1]) {
                aux = vetor[j]
                vetor[j] = vetor[j+1]
                vetor[j+1] = aux
            }
        }        
    }

    return vetor
}


function inv_ordem_vetor(vetor) {
    let vetorAux = []

    let j = vetor.length - 1

    for (let i = 0; i < vetor.length; i++) { 
        vetorAux[j] = vetor[i]
        j--
    }

    return vetorAux
}


main()