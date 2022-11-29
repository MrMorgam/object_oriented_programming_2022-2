class JaEliminadoException extends Error {
    constructor(message: string) {
        super(message);
    }
}


interface Defensivel {
    estaEliminado(): boolean;
    defenderAtaque(valorAtaque: number): void;
}


class Guerreiro implements Defensivel {
    constructor(
        private _id: number,
        private _descricao: string,
        private _forcaAtaque: number,
        private _vida: number = 10
    ) {}
    
    public estaEliminado(): boolean {
        return this._vida <= 0;
    }

    public defenderAtaque(valorAtaque: number): void {
        this._vida -= valorAtaque;
    }

    public atacar(defensor: Defensivel): void {
        if (defensor.estaEliminado()) {
            throw new JaEliminadoException("Alvo já eliminado");
        }

        defensor.defenderAtaque(this._forcaAtaque);
    }
}


class BaseMilitar implements Defensivel{
    constructor(
        private _id: number,
        private _x: number,
        private _y: number, 
        private _percentualDano: number = 0
    ) {}

    public estaEliminado(): boolean {
        return this._percentualDano >= 90;
    }

    public defenderAtaque(valorAtaque: number): void {
        this._percentualDano += valorAtaque;
    }
}

enum ResultadoBatalha1 {
    EXERCITO01 = "Exército 01",
    EXERCITO02 = "Exército 02",
    EMPATE = "Empate"
}

type ResultadoBatalha = "Exército 01" | "Exército 02" | "Empate";

class CenarioBatalha {
    public avaliar(exercito1: Defensivel[], exercito2: Defensivel[]): ResultadoBatalha {
        let totalEliminadosExercito1: number = 0;
        let totalEliminadosExercito2: number = 0;

        for (let i: number = 0; i < exercito1.length; i++) {
            if (exercito1[i].estaEliminado()) {
                totalEliminadosExercito1++;
            }
        }

        for (let i: number = 0; i < exercito2.length; i++) {
            if (exercito2[i].estaEliminado()) {
                totalEliminadosExercito2++;
            }
        }

        let resultadoBatalha: ResultadoBatalha;

        if (totalEliminadosExercito1 < totalEliminadosExercito2) {
            resultadoBatalha = ResultadoBatalha1.EXERCITO01;
        } else if (totalEliminadosExercito2 < totalEliminadosExercito1) {
            resultadoBatalha = ResultadoBatalha1.EXERCITO02;
        } else {
            resultadoBatalha = ResultadoBatalha1.EMPATE;
        }

        return resultadoBatalha;
    }
}


function main(): void {
    let baseMilitar1: BaseMilitar = new BaseMilitar(1, 153, 252);
    let baseMilitar2: BaseMilitar = new BaseMilitar(1, 759, 857);

    let guerreiro1: Guerreiro = new Guerreiro(123, "Guerreiro comum", 5);
    let guerreiro2: Guerreiro = new Guerreiro(321, "Guerreiro especial", 10);
    let guerreiro3: Guerreiro = new Guerreiro(456, "Guerreiro comum", 5);
    let guerreiro4: Guerreiro = new Guerreiro(654, "Guerreiro especial", 10);

    let exercito1: Defensivel[] = [baseMilitar1, guerreiro1, guerreiro2];
    let exercito2: Defensivel[] = [baseMilitar2, guerreiro3, guerreiro4];

    try {
        guerreiro1.atacar(guerreiro3);
        guerreiro1.atacar(guerreiro3);
        guerreiro1.atacar(guerreiro3);
    } catch (e: any) {
        console.log(e.message);
    }

    let cenarioBatalha: CenarioBatalha = new CenarioBatalha();

    console.log(cenarioBatalha.avaliar(exercito1, exercito2));
}


main();