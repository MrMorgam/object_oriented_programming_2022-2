function displayGreeting(name: string, treatmentPronoun: string = "Sr."): void {
    console.log(`Bom dia, ${treatmentPronoun} ${name}!`);
}


function main(): void {
    displayGreeting("Sávia", "Sra.");
    displayGreeting("Ely");
}


main();