"use strict";
function displayGreeting(name, treatmentPronoun) {
    if (treatmentPronoun === void 0) { treatmentPronoun = "Sr."; }
    console.log("Bom dia, ".concat(treatmentPronoun, " ").concat(name, "!"));
}
function main() {
    displayGreeting("Sávia", "Sra.");
    displayGreeting("Ely");
}
main();
