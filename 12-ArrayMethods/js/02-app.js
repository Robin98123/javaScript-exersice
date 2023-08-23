const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//con el metodo FindIndex podemos encontrar la ubicación en el arreglo

const indice =  meses.findIndex(mes => mes === 'Abril' )
console.log(indice)

//en este caso retornará 3
//si no esta definido el valor en el arreglo retornará -1

const indice2 = carrito.findIndex( mes => mes.nombre === 'Celular');
console.log(indice2)