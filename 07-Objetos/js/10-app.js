const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
};
const medidad = {
    peso: '1kg',
    medida : '1m',
};
const resultado = Object.assign(producto, medidad);

const resultado2 = {...producto, ...medidad};

console.log(resultado2);