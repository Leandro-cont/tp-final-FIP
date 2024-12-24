"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
var Cliente = /** @class */ (function () {
    function Cliente(nombre, telefono, id) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.id = id;
        this.visitas = 0;
        this.vip = false;
    }
    Cliente.prototype.registrarVisita = function () {
        this.visitas += 1;
        if (this.visitas >= 5) {
            this.vip = true;
        }
    };
    return Cliente;
}());
exports.Cliente = Cliente;
