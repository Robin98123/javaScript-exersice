//object literal

const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
};

//objeto constructor

function Producto_general(nombre, precio){
    this.nombre =  nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto_general ('monitor 24 pulgadas', 500);
console.log(producto2);

const producto3 = new Producto_general ('tablet 12 pulgadas', 800);
console.log(producto3);