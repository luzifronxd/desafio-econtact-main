
function calcularCuadrados(arreglo = []) {
   const n = Object.values(arreglo);
   let array =[];
   for(let i of n) {
        i=i**2;
        array.push(i);
        } 

   return array;
}
const arrayres = [1, 3, 4, 7, 12, 18, 20, 26];
console.log(calcularCuadrados(arrayres))