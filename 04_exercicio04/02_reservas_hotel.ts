class Hotel {
    quantReservas: number;

    constructor(n: number) {
        this.quantReservas = n;
    }

    adicionarReserva(): void {
        this.quantReservas++;
    }

}


function main(): void {
    let hotel: Hotel = new Hotel(2);

    console.log(hotel.quantReservas);

    hotel.adicionarReserva();

    console.log(hotel.quantReservas);
}


main();