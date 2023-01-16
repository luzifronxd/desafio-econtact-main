
function sumatoria(numeros = []) {
    let tot=0
    for(let i of numeros) {
    tot+=i;
    } 
    return tot;

 }
console.log(sumatoria([6,5,4,7,9,55]))