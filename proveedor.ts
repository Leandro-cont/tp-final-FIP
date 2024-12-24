export class Proveedor {
   public id: string;
   private nombre: string;
   private telefono: string;
  
    constructor(nombre: string, telefono: string, id: string) {
      this.nombre = nombre;
      this.telefono = telefono;
      this.id = id;
    }
  }
  