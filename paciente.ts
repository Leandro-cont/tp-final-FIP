export class Paciente {
    public id: string;
    private nombre: string;
    private especie: string;
    private dueñoId: string;
  
    constructor(nombre: string, especie: string, dueñoId: string, id: string) {
      this.nombre = nombre;
      this.especie = ["perro", "gato"].includes(especie.toLowerCase()) ? especie : "exótica";
      this.dueñoId = dueñoId;
      this.id = id;
    }
  }