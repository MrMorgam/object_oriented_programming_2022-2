function exibir(...strings: string[]) {
    console.log(strings);
}


function main(): void {
    exibir("a", "b");
    exibir("a", "b", "c");
    exibir("a", "b", "c", "d");
}


main();