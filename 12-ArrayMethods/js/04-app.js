const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]




let resultado;

carrito.forEach( (producto, index) =>{
    if(producto.precio > 400 ){
        console.log(`el producto ${index} cuesta mas de 400`)
    }else if(producto.precio < 600){
        console.log(`el producto ${index} cuesta menos de 600`)
    }else if(producto.nombre !== 'Audifonos'){
        console.log(`el producto ${nombre} ha sido eliminado del carrito`)
    }else if(producto.nombre === 'Audifonos'){
        console.log(`los otros productos menos ${nombre} han sido eliminados del carrito`)
    }
})

// resultado = carrito.filter(producto => producto.precio > 400);
// resultado =  carrito.filter(producto => producto.precio < 600);
// resultado =  carrito.filter(producto => producto.nombre !== 'Audifonos');
// resultado =  carrito.filter(producto => producto.nombre === 'Audifonos');


// console.log(resultado)