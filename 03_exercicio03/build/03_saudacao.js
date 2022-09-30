"use strict";
function displayGreeting(name, treatmentPronoun = "Sr.") {
    console.log(`Bom dia, ${treatmentPronoun} ${name}!`);
}
function main() {
    displayGreeting("Sávia", "Sra.");
    displayGreeting("Ely");
}
main();
