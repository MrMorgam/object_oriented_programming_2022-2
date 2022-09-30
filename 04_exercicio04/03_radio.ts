class Radio {
    volume : number;
    
    constructor(volume : number) {  // No construtor, é definido que deve-se receber um argumento
        this.volume = volume;       // numérico. Para solucionar o problema, basta passar um argumento                                 //    um argumento
    }                               // válido ou definir que o argumento é opicional no construtor.
}

function main(): void {
    let r : Radio = new Radio(0);  // Passando um argumento numérico.
    console.log(r.volume);

    r.volume = 10;
    console.log(r.volume);
}


main();