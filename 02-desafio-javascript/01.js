function largoDelNombre(name = "") {
    let invalidos = /^[0-9]+$/;
    if (name.match(invalidos))
    {
        return `El parámetro recibido es invalido`;
    }
    else
    {
        let length = name.length;
        if (length >= 0 && length < 5)
            {
                return `Es un nombre CORTO. Su largo es: ${length}`;
            }
        else
            {
                if (length > 5 && length < 11)
                    {
                        return `Su largo es: ${length}`;
                    }
                if (length >= 11)
                    {
                        return `Es un nombre LARGO. Su largo es: ${length}`;
                    }
            }
    }
}
console.log(largoDelNombre("Miguel Huaman"))