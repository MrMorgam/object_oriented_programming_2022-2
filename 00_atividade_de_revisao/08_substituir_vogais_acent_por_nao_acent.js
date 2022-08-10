import prompt from 'prompt-sync'
const input = prompt()


function main() {
    const texto = input('Digite um texto: ')
    
    const textoSemAcentos = texto_sem_acentos(texto)

    console.log(`\nTexto sem acentos: "${textoSemAcentos}"`)
}


function texto_sem_acentos(texto) {
    let textoSemAcentos = ''

    for (let i = 0; i < texto.length; i++) { 
        if (texto[i].charCodeAt(0) >= 192 && texto[i].charCodeAt(0) <= 197) {
            textoSemAcentos += 'A'
        } else if (texto[i].charCodeAt(0) >= 200 && texto[i].charCodeAt(0) <= 203) {
            textoSemAscentos += 'E'
        } else if (texto[i].charCodeAt(0) >= 204 && texto[i].charCodeAt(0) <= 207) {
            textoSemAcentos += 'I'
        } else if (texto[i].charCodeAt(0) >= 210 && texto[i].charCodeAt(0) <= 214) {
            textoSemAcentos += 'O'
        } else if (texto[i].charCodeAt(0) >= 217 && texto[i].charCodeAt(0) <= 220) {
            textoSemAcentos += 'U'
        } else if (texto[i].charCodeAt(0) >= 224 && texto[i].charCodeAt(0) <= 229) {
            textoSemAcentos += 'a'
        } else if (texto[i].charCodeAt(0) >= 232 && texto[i].charCodeAt(0) <= 235) {
            textoSemAcentos += 'e'
        } else if (texto[i].charCodeAt(0) >= 236 && texto[i].charCodeAt(0) <= 239) {
            textoSemAcentos += 'i'
        } else if (texto[i].charCodeAt(0) >= 242 && texto[i].charCodeAt(0) <= 246) {
            textoSemAcentos += 'o'
        } else if (texto[i].charCodeAt(0) >= 249 && texto[i].charCodeAt(0) <= 252) {
            textoSemAcentos += 'u'
        } else {
            textoSemAcentos  += texto[i]
        }
    }

    return textoSemAcentos
}


main()