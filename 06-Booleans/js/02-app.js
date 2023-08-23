const boolean1 = true;
const boolean2 = false;

//comparar variables con valores booleanos con el operadores (==, ===), (!==,!===)

console.log(boolean1 == boolean2); //false por que el valor no es igual en los dos}
console.log(boolean1 === boolean2); //false por que ni el valor, ni el tipo de dato son iguales

//comparar variables con un tipo de dato o con string

console.log(boolean1 == true); //genera true por que el valor de la variable es de true
console.log(boolean1 == "true"); //false por que este true es un strig y no un true reservado por js
console.log(boolean1 === "true"); //false por que ni es el mimso tipo de dato, ni tampoco es el valor ya que es string


