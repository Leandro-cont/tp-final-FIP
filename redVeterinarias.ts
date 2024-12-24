import * as readline from "readline-sync"
import { Utils } from "./utils";
import { Veterinaria } from "./veterinaria";
import { Proveedor } from "./proveedor";

export class RedVeterinarias {
  private nombre: string;
  private veterinarias: Veterinaria[] = [];
  private proveedores: Proveedor[] = [];
  private existingIds: Set<string> = new Set();

constructor (nombre:string){
  this.nombre = nombre;
}

  agregarVeterinaria(nombre: string, direccion: string): void {
    const id = Utils.generateUniqueId(this.existingIds);
    const veterinaria = new Veterinaria(nombre, direccion, id, this.existingIds);
    this.veterinarias.push(veterinaria);
    console.log("Veterinaria agregada:", veterinaria);

    console.log("\n--- Ingresar datos de un cliente ---");
    const clienteNombre = readline.question("Nombre del cliente: ");
    const clienteTelefono = readline.question("Teléfono del cliente: ");
    veterinaria.agregarCliente(clienteNombre, clienteTelefono);

    console.log("\nClientes actuales:");
    veterinaria["clientes"].forEach((cliente, index) => {
      console.log(`${index + 1}. ${cliente["nombre"]} (ID: ${cliente["id"]})`);
    });

    console.log("\n--- Ingresar datos de un paciente ---");
    const pacienteNombre = readline.question("Nombre del paciente: ");
    const pacienteEspecie = readline.question("Especie del paciente: ");
    const dueñoId = veterinaria["clientes"][0]?.["id"] || readline.question("ID del dueño: ");
    veterinaria.agregarPaciente(pacienteNombre, pacienteEspecie, dueñoId);

    console.log("\nPacientes actuales:");
    veterinaria["pacientes"].forEach((paciente, index) => {
      console.log(`${index + 1}. ${paciente["nombre"]} (${paciente["especie"]})`);
    });
  }

  modificarVeterinaria(id: string, datos: Partial<Omit<Veterinaria, 'id'>>): void {
    const veterinaria = this.veterinarias.find(v => v.id === id);
    if (veterinaria) {
      Object.assign(veterinaria, datos);
      console.log("Veterinaria modificada:", veterinaria);
    } else {
      console.log("Veterinaria no encontrada.");
    }
  }

  eliminarVeterinaria(id: string): void {
    this.veterinarias = this.veterinarias.filter(v => v.id !== id);
    console.log("Veterinaria eliminada.");
  }

  agregarProveedor(nombre: string, telefono: string): void {
    const id = Utils.generateUniqueId(this.existingIds);
    const proveedor = new Proveedor(nombre, telefono, id);
    this.proveedores.push(proveedor);
    console.log("Proveedor agregado:", proveedor);
  }

  modificarProveedor(id: string, datos: Partial<Omit<Proveedor, 'id'>>): void {
    const proveedor = this.proveedores.find(p => p.id === id);
    if (proveedor) {
      Object.assign(proveedor, datos);
      console.log("Proveedor modificado:", proveedor);
    } else {
      console.log("Proveedor no encontrado.");
    }
  }

  eliminarProveedor(id: string): void {
    this.proveedores = this.proveedores.filter(p => p.id !== id);
    console.log("Proveedor eliminado.");
  }
}

