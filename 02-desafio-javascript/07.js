
 function obtenerPaisesConTelefono(econtact = {}) {

  const Paises = Object(econtact.datos.sedes)
  const {Chile, Peru, EEUU, Ecuador, Colombia} = Paises;
  cont = 0;
  if (Chile.telefono != null)
  {
    cont = cont + 1;
  }
  if (Peru.telefono != null)
  {
    cont = cont + 1;
  }
  if (EEUU.telefono != null)  
  {
    cont = cont + 1;
  }
  if (Ecuador.telefono != null)
  {
    cont = cont + 1;
  }
  if (Colombia.telefono != null)
  {
    cont = cont + 1;
  }

  return  `La cantidad de Paises con telefono asignado: ${cont}`;

}
const objetoFijo = {
empresa: "E-Contact",
datos: {
empleados: 100,
direccion: {
  calle: "Calle Córdoba",
  numero: 476,
  piso: 3,
},
sectores: [
  "Contabilidad",
  "Finanzas",
  "Informática",
  "Atención al público",
],
sedes: {
  Chile: { telefono: 56227566262, empleados: 35 },
  Peru: { telefono: 5116358614, empleados: 25 },
  EEUU: { telefono: null, empleados: 43 },
  Ecuador: { telefono: null, empleados: 19 },
  Colombia: { telefono: 3178952449, empleados: 28 },
},
},
};
console.log(obtenerPaisesConTelefono(objetoFijo));