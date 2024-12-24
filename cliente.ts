export class Cliente {
    public id: string;
    private nombre: string;
    private telefono: string;
    private visitas: number;
    private vip: boolean;
  
    constructor(nombre: string, telefono: string, id: string) {
      this.nombre = nombre;
      this.telefono = telefono;
      this.id = id;
      this.visitas = 0;
      this.vip = false;
    }
  
    registrarVisita(): void {
      this.visitas += 1;
      if (this.visitas >= 5) {
        this.vip = true;
      }
    }
  }
  