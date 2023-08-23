const numero1 = 20;
const numero2 = "20";
const numero3 = 30;

//operador mayor a 
console.log(numero1 > numero3); //genera false ya que el numero 1 no es mayor que el numero 3

console.log(numero3 > numero1); // genera true ya que el numero 3 es mayor que el numero 1


//operador menor a

console.log (numero1 < numero3); //genera true ya que el numero 1 si es menor que el numero 3


console.log ((Number.parseInt(numero2)) < numero3 ); // genera true por que pasamos a entero el estring del numero 2 que es 20 y es  menor que el numero 3
