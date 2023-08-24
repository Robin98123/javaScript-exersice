const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
   { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
   { nombre: 'Teclado', precio: 400 },
   { nombre: 'Celular', precio: 700 },
 ]


//con el array methot every todos los elementos a verificar deben cumplir la misma condición
//una posibilidad para este es .some que verifica que almenos uno cumpla con la condición

 const resultado = carrito.every(producto => producto.precio < 700);

 console.log(resultado)

