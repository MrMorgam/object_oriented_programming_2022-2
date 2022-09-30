function isEven(number1: number): boolean {
    return number1 % 2 == 0;
}

function main(): void {
    console.log(isEven(0));
    console.log(isEven(1));
}

main();