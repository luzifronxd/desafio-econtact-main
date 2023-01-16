
function verificarClave(objeto = {},clave) {

    let res = Object.prototype.hasOwnProperty.call(objeto,clave)
    return res;

}
console.log(verificarClave({nombre: 'miguel', edad: 28, profesion: 'Tecnico'},'profesion'))