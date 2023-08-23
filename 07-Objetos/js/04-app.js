const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
}

//antigua forma de hacerlo se debia crear una variable y asignarle el obejto con el valor

const nombreproducto = producto.nombre;

console.log(nombreproducto)

//forma actual donde se declara la variable y se llama el valor del objeto

const { nombre } = producto;

console.log(nombre)