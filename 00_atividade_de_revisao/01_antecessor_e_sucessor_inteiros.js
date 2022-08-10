import prompt from 'prompt-sync'
const input = prompt()


function main() {
    const num = Number(input('Digite um número: '))

    const [antecessor, sucessor] = antecessor_e_sucessor_int(num)

    console.log(`\nAntecessor: ${antecessor}\nSucessor: ${sucessor}`)
}


function antecessor_e_sucessor_int(num) {
    const parteInt = num - (num % 1)

    const antecessor = parteInt - 1
    const sucessor = parteInt + 1

    return [antecessor, sucessor]
}


main()