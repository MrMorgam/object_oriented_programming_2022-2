class Equipamento {
    ligado: boolean;

    constructor() {
        this.ligado = false;
    }

    liga(): void {
        if (this.ligado == false) {
            this.ligado = true;
        }
    }

    desliga(): void {
        if (this.ligado == true) {
            this.ligado = false;
        }
    }

    inverte(): void {
        if (this.ligado == true) {
            this.ligado = false;
        } else {
            this.ligado = true;
        }
    }

    estaLigado(): boolean {
        return this.ligado;
    }

}


function main(): void {
    let equipamento: Equipamento = new Equipamento();

    console.log(equipamento.estaLigado());

    equipamento.liga();
    console.log(equipamento.estaLigado());
    
    equipamento.desliga();
    console.log(equipamento.estaLigado());

    equipamento.inverte();
    console.log(equipamento.estaLigado());
    
}


main();