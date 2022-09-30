var Hotel = /** @class */ (function () {
    function Hotel(n) {
        this.quantReservas = n;
    }
    Hotel.prototype.adicionarReserva = function () {
        this.quantReservas++;
    };
    return Hotel;
}());
function main() {
    var hotel = new Hotel(2);
    console.log(hotel.quantReservas);
    hotel.adicionarReserva();
    console.log(hotel.quantReservas);
}
main();
