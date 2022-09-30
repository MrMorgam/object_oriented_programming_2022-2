var Hotel = /** @class */ (function () {
    function Hotel() {
    }
    Hotel.prototype.adicionarReserva = function () {
        this.quantReservas++;
    };
    return Hotel;
}());
function main() {
    var hotel = new Hotel();
    hotel.adicionarReserva();
    console.log(hotel.quantReservas);
}
