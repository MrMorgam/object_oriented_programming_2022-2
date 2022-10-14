class Hora {
    constructor(private hora: number, private minuto: number, private segundo: number) {}

    public lerHora(): number {
        return this.hora;
    }

    public lerMinuto(): number {
        return this.minuto;
    }

    public lerSegundo(): number {
        return this.segundo;
    }

    public exibirHorario(): void {
        const hora: string = String(this.lerHora());
        const minuto: string = String(this.lerMinuto());
        const segundo: string = String(this.lerSegundo());

        console.log(`${hora.padStart(2, '0')}:${minuto.padStart(2, '0')}:${segundo.padStart(2, '0')}`); 
    }
}


function main(): void {
    let horario: Hora = new Hora(17,4,37);

    console.log(`${horario.lerHora()} hora(s)`);
    console.log(`${horario.lerMinuto()} minuto(s)`);
    console.log(`${horario.lerSegundo()} segundo(s)`);
    

    horario.exibirHorario();
}


main();