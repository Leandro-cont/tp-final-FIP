import { Cliente } from "./cliente";
import { Paciente } from "./paciente";
import { Utils } from "./utils";

export class Veterinaria {
    public id: string;
    private nombre: string;
    private direccion: string;
    private clientes: Cliente[] = [];
    private pacientes: Paciente[] = [];
    private existingIds: Set<string>;
  
    constructor(nombre: string, direccion: string, id: string, existingIds: Set<string>) {
      this.nombre = nombre;
      this.direccion = direccion;
      this.id = id;
      this.existingIds = existingIds;
    }
  
    agregarCliente(nombre: string, telefono: string): void {
      const id = Utils.generateUniqueId(this.existingIds);
      const cliente = new Cliente(nombre, telefono, id);
      this.clientes.push(cliente);
      console.log("Cliente agregado:", cliente);
    }
  
    modificarCliente(id: string, datos: Partial<Omit<Cliente, 'id' | 'visitas' | 'vip'>>): void {
      const cliente = this.clientes.find(c => c.id === id);
      if (cliente) {
        Object.assign(cliente, datos);
        console.log("Cliente modificado:", cliente);
      } else {
        console.log("Cliente no encontrado.");
      }
    }
  
    eliminarCliente(id: string): void {
      this.clientes = this.clientes.filter(c => c.id !== id);
      console.log("Cliente eliminado.");
    }
  
    agregarPaciente(nombre: string, especie: string, dueñoId: string): void {
      if (!this.clientes.some(c => c.id === dueñoId)) {
        console.log("Dueño no encontrado.");
        return;
      }
      const id = Utils.generateUniqueId(this.existingIds);
      const paciente = new Paciente(nombre, especie, dueñoId, id);
      this.pacientes.push(paciente);
      console.log("Paciente agregado:", paciente);
    }
  
    modificarPaciente(id: string, datos: Partial<Omit<Paciente, 'id' | 'dueñoId'>>): void {
      const paciente = this.pacientes.find(p => p.id === id);
      if (paciente) {
        Object.assign(paciente, datos);
        console.log("Paciente modificado:", paciente);
      } else {
        console.log("Paciente no encontrado.");
      }
    }
  
    eliminarPaciente(id: string): void {
      this.pacientes = this.pacientes.filter(p => p.id !== id);
      console.log("Paciente eliminado.");
    }
  }