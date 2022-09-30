"use strict";
var Professor = /** @class */ (function () {
    function Professor() {
        this.name = "";
        this.paymentTime = "";
        this.preferredLang = "";
    }
    return Professor;
}());
var profEly = new Professor();
profEly.name = "Ely";
profEly.paymentTime = "12.56";
profEly.preferredLang = "Typescript";
console.log("".concat(profEly.name, "\nMy paymente time is ").concat(profEly.paymentTime, "\nand\nMy preferred language is ").concat(profEly.preferredLang));
