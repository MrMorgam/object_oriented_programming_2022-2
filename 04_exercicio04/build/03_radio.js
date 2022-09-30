var Radio = /** @class */ (function () {
    function Radio(volume) {
        this.volume = volume; // numérico no [...]. Para solucionar o problema, basta passar                                    //    um argumento
    } // um argumento válido no [...] ou definir no construtor que o
    return Radio;
}());
function main() {
    var r = new Radio(0); // Passando um argumento no [...].
    console.log(r.volume);
    r.volume = 10;
    console.log(r.volume);
}
main();
