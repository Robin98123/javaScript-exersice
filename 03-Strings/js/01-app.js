//el estring es una cadena de caracteres que se representan con '' o "" 
const producto = "Monitor de 20 pulgadas";

// otra forma de hacer un string es la de:
const producto2 = String('monitor de 24 pulgadas');

//strings de objetos, encasillará cada elemento del string dentro de un objeto
const producto3 = new String ('monitor de 24 pulgadas');

//reglas para crear strings
//los strings, simepre deben estar en comillas '...' o "..."
//en el caso de que el string lleve comilalas dobles, dentro de su declaración:

//comillas sencillas ('...'), no genera ningun error
const producto4 = 'monitor de 24"'

//comillas dobles ("..."), genera un error si no se identa con (/)
const producto5 = "monitor de 24\"" 
