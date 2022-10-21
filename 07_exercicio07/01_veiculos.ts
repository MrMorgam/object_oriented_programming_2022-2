class Veiculo {
    private _placa: string;
    private _ano: string;

    constructor(placa: string, ano: string) {
        this._placa = placa;
        this._ano = ano;
    }
}


class Carro extends Veiculo {
    private _modelo: string;

    constructor(placa: string, ano: string, modelo: string) {
        super(placa, ano);

        this._modelo = modelo;
    }
}


class CarroEletrico extends Carro {
    private _autonomiaBateira: number;

    constructor(placa: string, ano: string, modelo: string, autonomiaBateria: number) {
        super(placa, ano, modelo);

        this._autonomiaBateira = autonomiaBateria;
    }
}


function main(): void {
    let veiculo: Veiculo = new Veiculo("ABC1D23", "2020");
    let carro: Carro = new Carro("BCD2E34", "2021", "Renault Kwid");
    let carroEletrico: CarroEletrico = new CarroEletrico("CDE3F45", "2022", "Renault Kwid E-Tech", 265);
    
    console.log(veiculo);
    console.log(carro);
    console.log(carroEletrico);
}


main();