
function datosPersona(persona = {}) {
    const { nom, edad, altura} = persona;

    return `Esta persona se llama ${nom}, tiene ${edad}, años y su altura es de ${altura}`;
}

const datos = datosPersona({nom: "Miguel", edad: 29, altura: 1.70});
console.log(datos);