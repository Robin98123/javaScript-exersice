const numero1 = 20;
const numero2 = "20";
const numero3 = 30;

// comparar si dos valores son iguales con este comparador solo esta comparando valores, no es estricto (==)

console.log(numero1 == numero3); //false por que el valor numero3 no es igual al numero 1
console.log(numero1 == numero2); //true por que el valor numero1 y numero2 son iguales




//comparador estricto el cual comparará que ademas de que el valor sea igual tambien sea el mimso tipo de dato (===)

console.log(numero1 === numero2); //false por que el valor es igual pero el tipo de dato no lo es
console.log(numero1 === (Number.parseInt(numero2))); //usando parseInt convetimos a entero haciendo que el tipo de dato sea igual en los dos




//comparador diferente a... Simple, se usa para saber si dos datos son diferentes el uno del otro (!=)

const pasword1 = "admin";
const pasword2 = "Admin";

console.log(pasword1 != pasword2); //true por que el valor de pasword1 es diferente de pasword2
console.log (numero1 != numero2); //false por que el valor de numero1 y numero2 es igual




//comparador diferente a.. estricto, se usa para saber si dos datos son diferentes el uno del otro, comparando valor y tipo de dato

console.log(numero1 !== numero2); //true por que el valor es igual, pero el tipo de dato no lo es
console.log (numero1 !== parseInt(numero2)); //false por que l convertir con parseInt el valor del numero2 cambia y tanto el valor como tipo de dato seria igual en los dos casos

