"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedVeterinarias = void 0;
var veterinaria_1 = require("./veterinaria");
var proveedor_1 = require("./proveedor");
var utils_1 = require("./utils");
var RedVeterinarias = /** @class */ (function () {
    function RedVeterinarias(nombre) {
        this.veterinarias = [];
        this.proveedores = [];
        this.existingIds = new Set();
        this.nombre = nombre;
    }
    RedVeterinarias.prototype.agregarVeterinaria = function (nombre, direccion) {
        var id = utils_1.Utils.generateUniqueId(this.existingIds);
        var veterinaria = new veterinaria_1.Veterinaria(nombre, direccion, id, this.existingIds);
        this.veterinarias.push(veterinaria);
        console.log("Veterinaria agregada:", veterinaria);
    };
    RedVeterinarias.prototype.modificarVeterinaria = function (id, datos) {
        var veterinaria = this.veterinarias.find(function (v) { return v.id === id; });
        if (veterinaria) {
            Object.assign(veterinaria, datos);
            console.log("Veterinaria modificada:", veterinaria);
        }
        else {
            console.log("Veterinaria no encontrada.");
        }
    };
    RedVeterinarias.prototype.eliminarVeterinaria = function (id) {
        this.veterinarias = this.veterinarias.filter(function (v) { return v.id !== id; });
        console.log("Veterinaria eliminada.");
    };
    RedVeterinarias.prototype.agregarProveedor = function (nombre, telefono) {
        var id = utils_1.Utils.generateUniqueId(this.existingIds);
        var proveedor = new proveedor_1.Proveedor(nombre, telefono, id);
        this.proveedores.push(proveedor);
        console.log("Proveedor agregado:", proveedor);
    };
    RedVeterinarias.prototype.modificarProveedor = function (id, datos) {
        var proveedor = this.proveedores.find(function (p) { return p.id === id; });
        if (proveedor) {
            Object.assign(proveedor, datos);
            console.log("Proveedor modificado:", proveedor);
        }
        else {
            console.log("Proveedor no encontrado.");
        }
    };
    RedVeterinarias.prototype.eliminarProveedor = function (id) {
        this.proveedores = this.proveedores.filter(function (p) { return p.id !== id; });
        console.log("Proveedor eliminado.");
    };
    return RedVeterinarias;
}());
exports.RedVeterinarias = RedVeterinarias;
