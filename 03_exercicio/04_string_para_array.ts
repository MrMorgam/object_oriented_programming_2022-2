function converterArrayParaString(numeros: number[]): string {
    let stringNumeros = "";

        for (let i = 0; i < numeros.length; i++) {
            if (i != numeros.length-1) {
                stringNumeros += `${numeros[i]}-`;
            } else {
                stringNumeros += `${numeros[i]}`;
            }
    }

    return stringNumeros;
}


function main(): void {
    const numeros: number[] = [1,2,3,4,5];

    const numerosEmString = converterArrayParaString(numeros);

    console.log(numerosEmString);
}


main();