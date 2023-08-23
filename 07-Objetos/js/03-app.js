//agregar mas propiedades a un objeto

const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
}

//despues de terminar el producto se pueden agregar nuevos valores

producto.imagen = "imagen.jpg"

//eliminar un elemento

delete producto.disponible;

console.log(producto);