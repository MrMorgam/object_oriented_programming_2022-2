function main(): void {
    const numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    const numerosPares: number[] = numeros.filter(numero => numero % 2 == 0);

    console.log(numerosPares);
}


main();