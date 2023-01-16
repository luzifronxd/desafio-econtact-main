function contarTipoNumber(array = []) {
    array = array.filter(function condition (element){
        if (typeof element == 'number') return true
        return false
    })
    var contar = array.length;
    return `Cantidad de valores numéricos: ${contar} `
}
console.log(contarTipoNumber(["PLANETA","1",true,1,"56","TIERRA"]));