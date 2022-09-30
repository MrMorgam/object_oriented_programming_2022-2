class Hotel {
    quantReservas: number;
    
    adicionarReserva() : void {
        this.quantReservas++;
    }                             
}

function main(): void {                // O programa não apresenta erro ao compilar.
    let hotel: Hotel = new Hotel();    // Porém, nada é printado ao rodar o programa.
     
    hotel.adicionarReserva();
    console.log(hotel.quantReservas);  
}

main();