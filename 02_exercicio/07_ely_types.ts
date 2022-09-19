class Professor {
    name : string;
    paymentTime : string;
    preferredLang : string;
}

const profEly = new Professor();
profEly.name = "Ely";
profEly.paymentTime = "12.56";
profEly.preferredLang = "Typescript";

console.log(`${profEly.name}\nMy paymente time is ${profEly.paymentTime}\nand\nMy preferred language is ${profEly.preferredLang}`)