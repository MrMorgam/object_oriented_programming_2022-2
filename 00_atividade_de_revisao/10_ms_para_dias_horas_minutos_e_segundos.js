import prompt from 'prompt-sync'
const input = prompt()


function main() {
    const tempoMs = Number(input('Digite o tempo (em ms): '))
    
    const [dias, horas, minutos, segundos] = conv_ms_para_dias_horas_minutos_segundos(tempoMs)

    console.log(`\nTempo: ${dias} dia(s), ${horas} hora(s), ${minutos} minuto(s) e ${segundos} segundos(s)`)
}


function conv_ms_para_dias_horas_minutos_segundos(tempoMs) {
    const dias = Math.trunc(tempoMs / 86400000)
    const resto1 = tempoMs % 86400000

    const horas = Math.trunc(resto1 / 3600000)
    const resto2 = resto1 % 3600000

    const minutos = Math.trunc(resto2 / 60000)
    const resto3 = resto2 % 60000

    const segundos = Math.trunc(resto3 / 1000)
    
    return [dias, horas, minutos, segundos]
}


main()