import prompt from 'prompt-sync'
const input = prompt()


function main() {
    const valorReal = Number(input('Digite o valor em real (R$): '))

    const valorBitcoin = conv_real_para_bitcoin(valorReal)

    console.log(`\nValor em Bitcoin: ${valorBitcoin} BTC`)
}


function conv_real_para_bitcoin(valorReal) {
    let valorBitcoin = valorReal * 0.0000084
    valorBitcoin = valorBitcoin.toFixed(8)

    return valorBitcoin
}


main()