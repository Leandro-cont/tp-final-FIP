"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veterinaria = void 0;
var cliente_1 = require("./cliente");
var paciente_1 = require("./paciente");
var utils_1 = require("./utils");
var Veterinaria = /** @class */ (function () {
    function Veterinaria(nombre, direccion, id, existingIds) {
        this.clientes = [];
        this.pacientes = [];
        this.nombre = nombre;
        this.direccion = direccion;
        this.id = id;
        this.existingIds = existingIds;
    }
    Veterinaria.prototype.agregarCliente = function (nombre, telefono) {
        var id = utils_1.Utils.generateUniqueId(this.existingIds);
        var cliente = new cliente_1.Cliente(nombre, telefono, id);
        this.clientes.push(cliente);
        console.log("Cliente agregado:", cliente);
    };
    Veterinaria.prototype.modificarCliente = function (id, datos) {
        var cliente = this.clientes.find(function (c) { return c.id === id; });
        if (cliente) {
            Object.assign(cliente, datos);
            console.log("Cliente modificado:", cliente);
        }
        else {
            console.log("Cliente no encontrado.");
        }
    };
    Veterinaria.prototype.eliminarCliente = function (id) {
        this.clientes = this.clientes.filter(function (c) { return c.id !== id; });
        console.log("Cliente eliminado.");
    };
    Veterinaria.prototype.agregarPaciente = function (nombre, especie, dueñoId) {
        if (!this.clientes.some(function (c) { return c.id === dueñoId; })) {
            console.log("Dueño no encontrado.");
            return;
        }
        var id = utils_1.Utils.generateUniqueId(this.existingIds);
        var paciente = new paciente_1.Paciente(nombre, especie, dueñoId, id);
        this.pacientes.push(paciente);
        console.log("Paciente agregado:", paciente);
    };
    Veterinaria.prototype.modificarPaciente = function (id, datos) {
        var paciente = this.pacientes.find(function (p) { return p.id === id; });
        if (paciente) {
            Object.assign(paciente, datos);
            console.log("Paciente modificado:", paciente);
        }
        else {
            console.log("Paciente no encontrado.");
        }
    };
    Veterinaria.prototype.eliminarPaciente = function (id) {
        this.pacientes = this.pacientes.filter(function (p) { return p.id !== id; });
        console.log("Paciente eliminado.");
    };
    return Veterinaria;
}());
exports.Veterinaria = Veterinaria;
