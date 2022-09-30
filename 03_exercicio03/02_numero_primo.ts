function isDivisible(number1: number, number2: number): boolean {
    return number1 % number2 == 0;
} 


function isPrime(number1: number): boolean {
    if (number1 <= 1) {
        return false;
    } else {
        for (let i = 2; i < number1; i++) {
            if (isDivisible(number1, i)) {
                return false;
            }
        }

        return true;
    }
}


function main(): void {
    console.log(isPrime(2));
    console.log(isPrime(3));
    console.log(isPrime(11));
    console.log(isPrime(77));
    console.log(isPrime(97));
}


main();