
function verificarSector(econtact = {}, sector) {

  let xsector = econtact.datos.sectores.find(i => i === sector);
  if (xsector === sector)
  {
      return true;
  }
  else
  {
      return false;
  }

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
    EEUU: { telefono: 17864978777, empleados: 43 },
    Ecuador: { telefono: null, empleados: 19 },
    Colombia: { telefono: 3178952449, empleados: 28 },
  },
},
};


console.log(verificarSector(objetoFijo,'Contabilidad'))
