
function calculoMatematico(operacion, numero1, numero2) {

  switch (operacion) {
      case "+":
          res = numero1 + numero2;
        break;
      case "-":
          res = numero1 - numero2;
        break;
      case "*":
          res = numero1 * numero2;
        break;
      case "/":
          res = numero1 / numero2;
        break;
      default:
          res = "ingresaste un operador NO valido"
        break;
    }

  return `${numero1} ${operacion} ${numero2} = ${res}`;
}
console.log(calculoMatematico("+",1,2));