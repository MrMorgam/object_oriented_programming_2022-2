"use strict";
function isDivisible(number1, number2) {
    return number1 % number2 == 0;
}
function isPrime(number1) {
    if (number1 <= 1) {
        return false;
    }
    else {
        for (let i = 2; i < number1; i++) {
            if (isDivisible(number1, i)) {
                return false;
            }
        }
        return true;
    }
}
function main() {
    console.log(isPrime(2));
    console.log(isPrime(3));
    console.log(isPrime(11));
    console.log(isPrime(77));
    console.log(isPrime(97));
}
main();
