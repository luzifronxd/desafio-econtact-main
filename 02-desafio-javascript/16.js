
function devolverPosicion(numeros = [], numero) {

    let i = numeros.indexOf(numero);
    return i;
}
console.log(devolverPosicion([5,2,3,12],5))