var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var FiguraGeometrica = /** @class */ (function () {
    function FiguraGeometrica() {
    }
    Object.defineProperty(FiguraGeometrica.prototype, "area", {
        get: function () {
            return this._area;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FiguraGeometrica.prototype, "perimetro", {
        get: function () {
            return this._perimetro;
        },
        enumerable: false,
        configurable: true
    });
    return FiguraGeometrica;
}());
var Quadrado = /** @class */ (function (_super) {
    __extends(Quadrado, _super);
    function Quadrado(lado) {
        var _this = _super.call(this) || this;
        _this._lado = lado;
        return _this;
    }
    Object.defineProperty(Quadrado.prototype, "lado", {
        get: function () {
            return this._lado;
        },
        enumerable: false,
        configurable: true
    });
    Quadrado.prototype.calcularArea = function () {
        this._area = Math.pow(this._lado, 2);
    };
    Quadrado.prototype.calcularPerimetro = function () {
        this._perimetro = this._lado * 4;
    };
    return Quadrado;
}(FiguraGeometrica));
var Circulo = /** @class */ (function (_super) {
    __extends(Circulo, _super);
    function Circulo(raio) {
        var _this = _super.call(this) || this;
        _this._raio = raio;
        return _this;
    }
    Object.defineProperty(Circulo.prototype, "raio", {
        get: function () {
            return this._raio;
        },
        enumerable: false,
        configurable: true
    });
    Circulo.prototype.calcularArea = function () {
        this._area = Math.PI * (Math.pow(this._raio, 2));
    };
    Circulo.prototype.calcularPerimetro = function () {
        this._perimetro = 2 * Math.PI * this._raio;
    };
    return Circulo;
}(FiguraGeometrica));
function main() {
    var quadrado = new Quadrado(2);
    var circulo = new Circulo(1);
    circulo.calcularArea();
    circulo.calcularPerimetro();
    quadrado.calcularArea();
    quadrado.calcularPerimetro();
    console.log(quadrado.area);
    console.log(quadrado.perimetro);
    console.log(circulo.area);
    console.log(circulo.perimetro);
}
main();
