const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

const productos2 = [
    { producto:  'botella', precio: 100}
]

//stred operatos agregará el elemento sin modificar el arreglo

const meses2 = [...meses, 'Agosto']
console.log(meses2);

//stred operator para objetos

const carrito2 = {...carrito,productos2};

console.log(carrito2)
