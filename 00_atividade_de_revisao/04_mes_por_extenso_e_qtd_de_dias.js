import prompt from 'prompt-sync'
const input = prompt()


function main() {
    const mesNum = Number(input('Digite o número do mês (1 a 12): '))

    const nomeMes = conv_num_mes_para_mes_extenso(mesNum)
    const qtdDiasNoMes = qtd_dias_no_mes(mesNum)

    console.log(`\nMês: ${nomeMes}\nQuantidade de dias: ${qtdDiasNoMes}`)
}


function conv_num_mes_para_mes_extenso(mesNum) {
    let nomeMes = ''

    if (mesNum === 1) {
        nomeMes = 'janeiro'
    } else if (mesNum === 2) {
        nomeMes = 'fevereiro'
    } else if (mesNum === 3) {
        nomeMes = 'março'
    } else if (mesNum === 4) {
        nomeMes = 'abril'
    } else if (mesNum === 5) {
        nomeMes = 'maio'
    } else if (mesNum === 6) {
        nomeMes = 'junho'
    } else if (mesNum === 7) {
        nomeMes = 'julho'
    } else if (mesNum === 8) {
        nomeMes = 'agosto'
    } else if (mesNum === 9) {
        nomeMes = 'setembro'
    } else if (mesNum === 10) {
        nomeMes = 'outubro'
    } else if (mesNum === 11) {
        nomeMes = 'novembro'
    } else {
        nomeMes = 'dezembro'
    }

    return nomeMes
}


function qtd_dias_no_mes(numMes) {
    let qtdDias = 0

    if (numMes === 2) {
        qtdDias = 28
    } else if (numMes === 4 || numMes === 6 || numMes === 9 || numMes === 11) {
        qtdDias = 30
    } else {
        qtdDias = 31
    }

    return qtdDias
}


main()