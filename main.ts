import { Veterinaria } from "./veterinaria";
import { Cliente } from "./cliente";
import { Paciente } from "./paciente";
import { Proveedor } from "./proveedor";
import { RedVeterinarias } from "./redVeterinarias";

const red = new RedVeterinarias("swiss veterinary");
red.agregarVeterinaria("El tala", "Av Sarmiento 2858");
red.agregarVeterinaria("El ombu", "9 Julio 3111");
