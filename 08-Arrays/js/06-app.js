const carrito = [];

//definir un producto

const producto = {
    nombre : "Monitor 32 pulgadas",
    precio: 400
};

const producto2 = {
    nombre : "celular",
    precio: 800
};


const producto3 = {
    nombre : "teclado",
    precio : 300
}

let resultado;

resultado = [...carrito, producto]


console.table(resultado);