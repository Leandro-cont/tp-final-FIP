EJERCICIO:
Nuestro cliente es una red de veterinarias y desea poder acceder a la siguiente información
- Sucursales de veterinarias
- Clientes 
- Pacientes (mascotas)
- Proveedores

*Veterinarias: se componen de NOMBRE, DIRECCION, ID(un numero generado aleatoriamente al momento del alta).
La red debe tener la posibilidad de dar de alta, modificar datos o dar de baja las mismas.

*Clientes: se componen de NOMBRE, TELEFONO, si es VIP(cliente recurrente, e el cual se guarda el numero de visitas e incrementarlo cada vez que se realiza una y para ser VIP tiene que tener 5 visitas o mas) y un ID (generado igual que los anteriores), las veterinarias deben contar con la opción de alta, baja y modificación de los mismos.

*Pacientes (mascotas): se componen de NOMBRE, ESPECIE(si no es perro o gato, deberá registrarse como exótica), ID del dueño, las veterinarias deben contar con la opción de alta, baja y modificaciones de los mismos.

*proveedores: se componen de NOMBRE, TELEFONO, y un ID generado como los otros, la red debe contar con la opción de alta, baja y modificación de los mismo.

IMPORTANTE: los id deben ser únicos, por lo tanto al generarse, antes de guardarlos se debe validar que no exista, si ya existe se debe volver a generar.