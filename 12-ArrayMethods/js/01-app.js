const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//metodo include : permite ver si un valor esta incluido dentro del arreglo
//solo funciona con arreglo de un solo indice

const resultado =  meses.includes('Diciembre');
console.log(resultado);

//retornaria false ya que no incluye el valor Dicembre


//metodo .some : permite iterar dentro de un arreglo de objetos

const existe =  carrito.some( producto => {return producto.nombre === 'Celular'} )

console.log(existe);

// retornará true ya que si se encuentra incluido dentro del arreglo de objetos 

//tambien se puede usar este metodo para arrays de una sola linea

const existe2 = meses.some( listproduct => listproduct === 'Marzo' );
console.log(existe2)
