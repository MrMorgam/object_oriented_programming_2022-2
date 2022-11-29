class AlredyEliminatedException extends Error {
    constructor(message: string) {
        super(message);
    }
}


interface Defensible {
    isEliminated(): boolean;
    defendStrike(strikePower: number): void;
}


class Warrior implements Defensible {
    constructor(
        private _id: string,
        private _description: string,
        private _strikePower: number,
        private _life: number = 10
    ) {}
    
    public isEliminated(): boolean {
        return this._life <= 0;
    }

    public defendStrike(strikePower: number): void {
        this._life -= strikePower;
    }

    public strike(defensible: Defensible): void {
        if (defensible.isEliminated()) {
            throw new AlredyEliminatedException("Target already eliminated");
        }

        defensible.defendStrike(this._strikePower);
    }
    

}


class MilitaryBase implements Defensible{
    constructor(
        private _id: string,
        private _x: number,
        private _y: number,
        private damageTaken: number = 0
    ) {}
    
    public isEliminated(): boolean {
        return this.damageTaken >= 90;
    }

    public defendStrike(strikePower: number): void {
        this.damageTaken += strikePower;
    }
}

enum BattleResultEnum {
    ARMY01 = "Army 01",
    ARMY02 = "Army 02",
    DRAW = "Draw"
}

type BattleResult = "Army 01" | "Army 02" | "Draw";

class BattleScenario {
    public evaluate(army01: Defensible[], army02: Defensible[]): BattleResult {
        let eliminatedTargets01: number = 0;
        let eliminatedTargets02: number = 0;

        for (let i: number = 0; i < army01.length; i++) {
            if (army01[i].isEliminated()) {
                eliminatedTargets01++;
            }
        }

        for (let i: number = 0; i < army02.length; i++) {
            if (army02[i].isEliminated()) {
                eliminatedTargets02++;
            }
        }

        let battleResult: BattleResult;

        if (eliminatedTargets01 < eliminatedTargets02) {
            battleResult = BattleResultEnum.ARMY01;
        } else if (eliminatedTargets02 < eliminatedTargets01) {
            battleResult = BattleResultEnum.ARMY02;
        } else {
            battleResult = BattleResultEnum.DRAW;
        }

        return battleResult;
    }
}


function main(): void {
    let militaryBase: MilitaryBase = new MilitaryBase("001", 153, 252);
    let militaryBase02: MilitaryBase = new MilitaryBase("002", 759, 857);

    let warrior01: Warrior = new Warrior("123", "Common warrior", 5);
    let warrior02: Warrior = new Warrior("321", "Special warrior", 10);
    let warrior03: Warrior = new Warrior("456", "Common warrior", 5);
    let warrior04: Warrior = new Warrior("654", "Special warrior", 10);

    let army01: Defensible[] = [militaryBase, warrior01, warrior02];
    let army02: Defensible[] = [militaryBase02, warrior03, warrior04];

    try {
        warrior01.strike(warrior03);
        warrior01.strike(warrior03);
        warrior01.strike(warrior03);
    } catch (e: any) {
        console.log(e.message);
    }

    let battleScenario: BattleScenario = new BattleScenario();

    console.log(battleScenario.evaluate(army01, army02));
}


main();