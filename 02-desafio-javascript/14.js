
function validarArreglo(numeros = []) {        

    if (numeros.length < 6)
    
        {
            return false;
        }
        else
            
        {
            let tot=0;
            
            for(let i of numeros) {
                    tot+=i;
                }
                if (tot > 100){
            
                    return true;
        
                }
                else
                {
                    return false;
                }
        }
    
    }
    console.log(validarArreglo([100,200,3,4,5,6]))
    