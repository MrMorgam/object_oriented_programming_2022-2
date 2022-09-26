"use strict";
function converterArrayParaString(numeros) {
    var stringNumeros = "";
    for (var i = 0; i < numeros.length; i++) {
        if (i != numeros.length - 1) {
            stringNumeros += "".concat(numeros[i], "-");
        }
        else {
            stringNumeros += "".concat(numeros[i]);
        }
    }
    return stringNumeros;
}
function main() {
    var numeros = [1, 2, 3, 4, 5];
    var numerosEmString = converterArrayParaString(numeros);
    console.log(numerosEmString);
}
main();
