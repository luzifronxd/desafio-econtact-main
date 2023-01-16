
function divisiblesPorCinco(numeros = []) {

    let i = numeros.values();
    let count = 0;
    
    for (let n of i) {
    
        if (n %5 ==0) {
    
            count = count + 1;
        } 
    
    }
    return `La cantidad de numeros en el arreglo que son divisbles por 5 es = ${count}`;
   
 }
console.log(divisiblesPorCinco([5,10,15,55,60]));

