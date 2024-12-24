"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paciente = void 0;
var Paciente = /** @class */ (function () {
    function Paciente(nombre, especie, dueñoId, id) {
        this.nombre = nombre;
        this.especie = ["perro", "gato"].includes(especie.toLowerCase()) ? especie : "exótica";
        this.dueñoId = dueñoId;
        this.id = id;
    }
    return Paciente;
}());
exports.Paciente = Paciente;
