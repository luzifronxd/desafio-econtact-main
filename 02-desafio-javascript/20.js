
function quitarParteDecimal(arregloNumerosReales = []) {

        const numeros = Object.values(arregloNumerosReales);
        let array =[];
        for(let i of numeros) {
             i=Math.floor(i);
             array.push(parseInt(i));
             } 
     
        return array;
    
}
const NR = [34.4552, 25.1543, 17.9438, 90.5, 67.82, 5, 9.99, 62.037];
console.log(quitarParteDecimal(NR));