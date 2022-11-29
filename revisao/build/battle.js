var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AlredyEliminatedException = /** @class */ (function (_super) {
    __extends(AlredyEliminatedException, _super);
    function AlredyEliminatedException(message) {
        return _super.call(this, message) || this;
    }
    return AlredyEliminatedException;
}(Error));
var Warrior = /** @class */ (function () {
    function Warrior(_id, _description, _strikePower, _life) {
        if (_life === void 0) { _life = 10; }
        this._id = _id;
        this._description = _description;
        this._strikePower = _strikePower;
        this._life = _life;
    }
    Warrior.prototype.isEliminated = function () {
        return this._life <= 0;
    };
    Warrior.prototype.defendStrike = function (strikePower) {
        this._life -= strikePower;
    };
    Warrior.prototype.strike = function (defensible) {
        if (defensible.isEliminated()) {
            throw new AlredyEliminatedException("Target already eliminated");
        }
        defensible.defendStrike(this._strikePower);
    };
    return Warrior;
}());
var MilitaryBase = /** @class */ (function () {
    function MilitaryBase(_id, _x, _y, damageTaken) {
        if (damageTaken === void 0) { damageTaken = 0; }
        this._id = _id;
        this._x = _x;
        this._y = _y;
        this.damageTaken = damageTaken;
    }
    MilitaryBase.prototype.isEliminated = function () {
        return this.damageTaken >= 90;
    };
    MilitaryBase.prototype.defendStrike = function (strikePower) {
        this.damageTaken += strikePower;
    };
    return MilitaryBase;
}());
var BattleResultEnum;
(function (BattleResultEnum) {
    BattleResultEnum["ARMY01"] = "Army 01";
    BattleResultEnum["ARMY02"] = "Army 02";
    BattleResultEnum["DRAW"] = "Draw";
})(BattleResultEnum || (BattleResultEnum = {}));
var BattleScenario = /** @class */ (function () {
    function BattleScenario() {
    }
    BattleScenario.prototype.evaluate = function (army01, army02) {
        var eliminatedTargets01 = 0;
        var eliminatedTargets02 = 0;
        for (var i = 0; i < army01.length; i++) {
            if (army01[i].isEliminated()) {
                eliminatedTargets01++;
            }
        }
        for (var i = 0; i < army02.length; i++) {
            if (army02[i].isEliminated()) {
                eliminatedTargets02++;
            }
        }
        var battleResult;
        if (eliminatedTargets01 < eliminatedTargets02) {
            battleResult = BattleResultEnum.ARMY01;
        }
        else if (eliminatedTargets02 < eliminatedTargets01) {
            battleResult = BattleResultEnum.ARMY02;
        }
        else {
            battleResult = BattleResultEnum.DRAW;
        }
        return battleResult;
    };
    return BattleScenario;
}());
function main() {
    var militaryBase = new MilitaryBase("001", 153, 252);
    var militaryBase02 = new MilitaryBase("002", 759, 857);
    var warrior01 = new Warrior("123", "Common warrior", 5);
    var warrior02 = new Warrior("321", "Special warrior", 10);
    var warrior03 = new Warrior("456", "Common warrior", 5);
    var warrior04 = new Warrior("654", "Special warrior", 10);
    var army01 = [militaryBase, warrior01, warrior02];
    var army02 = [militaryBase02, warrior03, warrior04];
    try {
        warrior01.strike(warrior03);
        warrior01.strike(warrior03);
        warrior01.strike(warrior03);
    }
    catch (e) {
        console.log(e.message);
    }
    var battleScenario = new BattleScenario();
    console.log(battleScenario.evaluate(army01, army02));
}
main();
