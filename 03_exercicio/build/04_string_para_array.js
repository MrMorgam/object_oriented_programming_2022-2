"use strict";
function converterArrayParaString(numeros) {
    let stringNumeros = "";
    for (let i = 0; i < numeros.length; i++) {
        if (i != numeros.length - 1) {
            stringNumeros += `${numeros[i]}-`;
        }
        else {
            stringNumeros += `${numeros[i]}`;
        }
    }
    return stringNumeros;
}
function main() {
    const numeros = [1, 2, 3, 4, 5];
    const numerosEmString = converterArrayParaString(numeros);
    console.log(numerosEmString);
}
main();
