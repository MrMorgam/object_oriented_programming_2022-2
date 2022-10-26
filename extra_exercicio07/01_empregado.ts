class Empregado  {
    private _salario: number = 500;

    public calcularSalario(): number {
        return this._salario;
    }
}


class Diarista extends Empregado {
    public calcularSalario(): number {
        return (super.calcularSalario() / 30);
    }
}


class Horista extends Diarista {
    public calcularSalario(): number {
        return (super.calcularSalario() / 24);
    }
}


function main(): void {
    let empregado: Empregado = new Empregado();
    let diarista: Diarista = new Diarista();
    let horista: Horista = new Horista();

    console.log(empregado.calcularSalario());
    console.log(diarista.calcularSalario());
    console.log(horista.calcularSalario());
}


main();